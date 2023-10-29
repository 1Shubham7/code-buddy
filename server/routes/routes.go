package routes

import (
	"fmt"
	"net/http"
	"time"
	"context"
	"github.com/1shubham7/code-buddy/models"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
)

var validate = validator.New()
var coderCollection *mongo.Collection = OpenCollection(Client, "coder")

func AddCoder(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var coder models.Coder

	if err := c.BindJSON(&coder); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}
	validationErr := validate.Struct(coder)
	if validationErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		return
	}
	coder.ID = primitive.NewObjectID()
	result, insertErr := coderCollection.InsertOne(ctx, coder)
	if insertErr != nil {
		msg := fmt.Sprintf("Coder account not created")
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		fmt.Println(insertErr)
		return
	}
	defer cancel()
	c.JSON(http.StatusOK, result)
}

func GetCoders(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var coders []bson.M
	cursor, err := coderCollection.Find(ctx, bson.M{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	if err = cursor.All(ctx, &coders); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}
	defer cancel()
	fmt.Println(coders)
	c.JSON(http.StatusOK, coders)
}

func GetCoderById(c *gin.Context){

	CoderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(CoderID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var coder bson.M
	if err := coderCollection.FindOne(ctx, bson.M{"_id": docID}).Decode(&coder); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}
	defer cancel()
	fmt.Println(coder)
	c.JSON(http.StatusOK, coder)
}

func UpdateCoder(c *gin.Context) {
	coderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(coderID)
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var coder models.Coder

	if err := c.BindJSON(&coder); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	validationErr := validate.Struct(coder)
	if validationErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		return
	}

	result, err := coderCollection.ReplaceOne(
		ctx,
		bson.M{"_id": docID},
		bson.M{
			"name":        coder.Name,
		},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}
	defer cancel()
	c.JSON(http.StatusOK, result.ModifiedCount)
}

func DeleteCoder(c *gin.Context) {
	coderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(coderID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	result, err := coderCollection.DeleteOne(ctx, bson.M{"_id": docID})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, result.DeletedCount)
}