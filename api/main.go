package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

func loadData() (APIResponse, error) {

	var celestialData APIResponse
	var nilResponse APIResponse

	//Read data from json file
	fileBytes, err := os.ReadFile("./data/bodies.json")
	if err != nil {
		return nilResponse, fmt.Errorf("failed to read data file: %w", err)
	}

	// Unmarshal the bytes
	err = json.Unmarshal(fileBytes, &celestialData)
	if err != nil {
		return nilResponse, fmt.Errorf("failed to parse JSON: %w", err)
	}

	return celestialData, nil
}

func main() {
	origin := os.Getenv("ALLOW_ORIGIN")
	if origin == "" {
		log.Fatal("ALLOW_ORIGIN environment variable must be set")
	}
	fmt.Println("Loading data...")

	data, err := loadData()
	if err != nil {
		log.Fatalf("Critical startup error: %v", err)
	}
	fmt.Printf("Celestial bodies loaded successfully. %v celestial bodies into memory.\n", len(data.Data))

	http.HandleFunc("GET /bodies", handleGetBodies(data, origin))

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed %v", err)
	}
}

func handleGetBodies(data APIResponse, originVal string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", originVal)

		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Content-Type", "application/json")

		json.NewEncoder(w).Encode(data)

	}
}
