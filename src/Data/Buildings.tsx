import {BuildingList} from "../@types/Data/BuildingList";

export const Buildings: BuildingList = {
	// First group
	miner1: {
		name: "Miner Mk. 1",
		powerUsage: 5,
		powerGenerate: 0,
		type: "miner",
		buildingOrder: 0,
		level: 1
	},
	miner2: {
		name: "Miner Mk. 2",
		powerUsage: 12,
		powerGenerate: 0,
		type: "miner",
		buildingOrder: 1,
		level: 2
	},
	miner3: {
		name: "Miner Mk. 3",
		powerUsage: 30,
		powerGenerate: 0,
		type: "miner",
		buildingOrder: 2,
		level: 4
	},
	oilExtractor: {
		name: "Oil Extractor",
		powerUsage: 40,
		powerGenerate: 0,
		type: "oilExtractor",
		buildingOrder: 3,
		level: 1
	},
	resourceWellPressurizer: {
		name: "Resource Well Pressurizer",
		powerUsage: 150,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 4
	},
	resourceWellExtractor: {
		name: "Resource Well Extractor",
		powerUsage: 0,
		powerGenerate: 0,
		type: "resourceWellExtractor",
		buildingOrder: 5,
		level: 1
	},

	// Second group
	smelter: {
		name: "Smelter",
		powerUsage: 4,
		powerGenerate: 0,
		type: "smelter",
		buildingOrder: 10
	},
	foundry: {
		name: "Foundry",
		powerUsage: 4,
		powerGenerate: 0,
		type: "foundry",
		buildingOrder: 11
	},

	// Third group
	constructor: {
		name: "Constructor",
		powerUsage: 4,
		powerGenerate: 0,
		type: "constructor",
		buildingOrder: 20
	},
	assembler: {
		name: "Assembler",
		powerUsage: 15,
		powerGenerate: 0,
		type: "assembler",
		buildingOrder: 22
	},
	manufacturer: {
		name: "Manufacturer",
		powerUsage: 55,
		powerGenerate: 0,
		type: "manufacturer",
		buildingOrder: 23
	},

	// Fourth group
	refinery: {
		name: "Refinery",
		powerUsage: 30,
		powerGenerate: 0,
		type: "refinery",
		buildingOrder: 30
	},
	packager: {
		name: "Packager",
		powerUsage: 10,
		powerGenerate: 0,
		type: "packager",
		buildingOrder: 31
	},
	blender: {
		name: "Blender",
		powerUsage: 75,
		powerGenerate: 0,
		type: "blender",
		buildingOrder: 32
	},
	particleAccelerator: {
		name: "Particle Accelerator",
		powerUsage: 1500,
		powerGenerate: 0,
		type: "particleAccelerator",
		buildingOrder: 33
	},

	// Fifth group
	waterExtractor: {
		name: "Water Extractor",
		powerUsage: 20,
		powerGenerate: 0,
		type: "waterExtractor",
		buildingOrder: 100
	},
	coalGenerator: {
		name: "Coal Generator",
		powerUsage: 0,
		powerGenerate: 75,
		type: "coalGenerator",
		buildingOrder: 101
	},
	fuelGenerator: {
		name: "Fuel Generator",
		powerUsage: 0,
		powerGenerate: 150,
		type: "fuelGenerator",
		buildingOrder: 102
	},
	geothermalGenerator: {
		name: "Geothermal Generator",
		powerUsage: 0,
		powerGenerate: 200,
		type: "geothermalGenerator",
		buildingOrder: 103
	},
	nuclearPowerPlant: {
		name: "Nuclear Power Plant",
		powerUsage: 0,
		powerGenerate: 2500,
		type: "nuclearPowerPlant",
		buildingOrder: 104
	},

	// Sixth group
	truckStation: {
		name: "Truck Station",
		powerUsage: 20,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 110
	},
	electricLocomotive: {
		name: "Electric Locomotive",
		powerUsage: 110,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 111
	},
	trainStation: {
		name: "Train Station",
		powerUsage: 50,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 112
	},
	freightPlatform: {
		name: "Freight Platform",
		powerUsage: 50,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 113
	},
	dronePort: {
		name: "Drone Port",
		powerUsage: 100,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 114
	},

	// 7th group
	hyperTubeEntrance: {
		name: "Hyper Tube Entrance",
		powerUsage: 10,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 120
	},
	jumpPad: {
		name: "Jump Pad",
		powerUsage: 2,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 121
	},
	uJellyLandingPad: {
		name: "U-Jelly Landing Pad",
		powerUsage: 5,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 122
	},
	awesomeSink: {
		name: "AWESOME Sink",
		powerUsage: 30,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 123
	},
	pipelinePump1: {
		name: "Pipeline Pump Mk. 1",
		powerUsage: 5,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 124
	},
	pipelinePump2: {
		name: "Pipeline Pump Mk. 2",
		powerUsage: 8,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 125
	},
	radarTower: {
		name: "Radar Tower",
		powerUsage: 30,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 126
	},

	// 8th group
	ceilingLight: {
		name: "Ceiling Light",
		powerUsage: 2,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 200
	},
	floodLightTower: {
		name: "Flood Light Tower",
		powerUsage: 6,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 201
	},
	streetLight: {
		name: "Street Light",
		powerUsage: 1,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 202
	},
	wallMountedFloodLight: {
		name: "Wall Mounted Flood Light",
		powerUsage: 6,
		powerGenerate: 0,
		type: "special",
		buildingOrder: 203
	}
}
