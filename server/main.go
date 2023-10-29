package main

import (
	"github.com/1shubham7/code-buddy/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main(){
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(cors.Default())
	
	r.GET("/coder/:id", routes.GetCoders)
	r.GET("/coders", routes.GetCoderById)

	r.POST("/coder/add", routes.AddCoder)

	r.PUT("/coder/update/:id", routes.UpdateCoder)
	
	r.DELETE("coder/delete/:id", routes.DeleteCoder)

	r.Run(":1111")
}