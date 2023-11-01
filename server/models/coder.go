package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Coder struct{
	ID primitive.ObjectID `bson:"id"`
	Name *string	`json:name`
	Intro *string	`json:intro`
	GithubID *string	`json:github_id`
	Location *string	`json:location`
}