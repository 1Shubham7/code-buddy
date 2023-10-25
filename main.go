package main

import (
	"github.com/1shubham7/code-buddy/routes"
	"github.com/gin-gonic/cors"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main(){
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(cors.Default())
	
	r.GET("/coder/:id", routes.GetCoders)
	r.GET("/coders", routes.GetCoder)

	r.POST("/coder/add", routes.PostCoders)

	r.PUT("/coder/update/:id", routes.PutCoders)
	
	r.DELETE("coder/delete/:id", routes.DeleteCoder)

	r.Run(":1111")
}