package routes

import (
	"fmt"
	"log"
	"time"
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func DBinstance() *mongo.Client {
	MongoDb := "mongodb://localhost:27017/coderdb"

	client, err := mongo.NewClient(options.Client().ApplyURI(MongoDb))
	if err!=nil{
		log.Fatal(err)
	}
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil{
		log.Fatal(err)
	}
	fmt.Println("Connected to MongoDB")
	return client
}

var Client *mongo.Client = DBinstance()

