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
)

var validate = validate.New()
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