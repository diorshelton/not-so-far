package main

type BodyType string

const (
	Asteroid    BodyType = "Asteroid"
	Comet       BodyType = "Comet"
	DwarfPlanet BodyType = "Dwarf Planet"
	Moon        BodyType = "Moon"
	Planet      BodyType = "Planet"
	Star        BodyType = "Star"
)

type Body struct {
	ID          string   `json:"id"`
	EnglishName string   `json:"englishName"`
	BodyType    BodyType `json:"bodyType"`
	Vol         *float64 `json:"volume"`
	Density     *float64 `json:"density"`
	Mass        *float64 `json:"mass"`
}

type Meta struct {
}

type APIResponse struct {
	Data []Body `json:"data"`
	Meta Meta   `json:"meta"`
}
