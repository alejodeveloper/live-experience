package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handlerRequest)
	http.ListenAndServe(":8005", nil)
}

func handlerRequest(responseWriter http.ResponseWriter, request *http.Request){
	fmt.Fprintf(responseWriter, "Sup... First go server")
}