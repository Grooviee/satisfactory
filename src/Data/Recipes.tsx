import {RecipeList} from "../@types/Data/Recipes/RecipeList";

export const Recipes: RecipeList = {
	// "Recipes" for miners: Meaning what they are producing. All values are on normal production (*1)
	miner: {
		ironOre: {
			icon: "ironOre",
			name: "Iron Ore",
			products: {
				ironOre: 60
			}
		},
		copperOre: {
			icon: "copperOre",
			name: "Copper Ore",
			products: {
				copperOre: 60
			}
		},
		cateriumOre: {
			icon: "cateriumOre",
			name: "Caterium Ore",
			products: {
				cateriumOre: 60
			}
		},
		coal: {
			icon: "coal",
			name: "Coal",
			products: {
				coal: 60
			}
		},
		limestone: {
			icon: "limestone",
			name: "Limestone",
			products: {
				limestone: 60
			}
		},
		rawQuartz: {
			icon: "rawQuartz",
			name: "Raw Quartz",
			products: {
				rawQuartz: 60
			}
		},
		bauxite: {
			icon: "bauxite",
			name: "Bauxite",
			products: {
				bauxite: 60
			}
		},
		sulfur: {
			icon: "sulfur",
			name: "Sulfur",
			products: {
				sulfur: 60
			}
		},
		uranium: {
			icon: "uranium",
			name: "Uranium",
			products: {
				uranium: 60
			}
		},
		samOre: {
			icon: "samOre",
			name: "S.A.M. Ore",
			products: {
				samOre: 60
			}
		}
	},

	// Resource Well Extractor sources
	resourceWellExtractor: {
		crudeOilExtract: {
			icon: "crudeOil",
			name: "Crude Oil",
			products: {
				crudeOil: 60
			}
		},
		waterExtract: {
			icon: "water",
			name: "Water",
			products: {
				water: 60
			}
		},
		nitrogenGas: {
			icon: "nitrogenGas",
			name: "Nitrogen Gas",
			products: {
				nitrogenGas: 60
			}
		}
	},

	// Recipes for smelters.
	smelter: {
		ironIngot: {
			icon: "ironIngot",
			name: "Iron Ingot",
			ingredients: {
				ironOre: 30
			},
			products: {
				ironIngot: 30
			}
		},
		copperIngot: {
			icon: "copperIngot",
			name: "Copper Ingot",
			ingredients: {
				copperOre: 30
			},
			products: {
				copperIngot: 30
			}
		},
		cateriumIngot: {
			icon: "cateriumIngot",
			name: "Caterium Ingot",
			ingredients: {
				cateriumOre: 45
			},
			products: {
				cateriumIngot: 15
			}
		},
		pureAluminiumIngot: {
			icon: "aluminiumIngot",
			name: "Pure Aluminum Ingot",
			ingredients: {
				aluminiumScrap: 60
			},
			products: {
				aluminiumIngot: 30
			}
		}
	},

	// Recipes for foundry.
	foundry: {
		steelIngot: {
			icon: "steelIngot",
			name: "Steel Ingot",
			ingredients: {
				ironOre: 45,
				coal: 45
			},
			products: {
				steelIngot: 45
			}
		},
		aluminiumIngot: {
			icon: "aluminiumIngot",
			name: "Aluminium Ingot",
			ingredients: {
				aluminiumScrap: 90,
				silica: 75
			},
			products: {
				aluminiumIngot: 60
			}
		},
		cokeSteelIngot: {
			icon: "steelIngot",
			name: "Alternate: Coke Steel Ingot",
			ingredients: {
				ironOre: 75,
				petroleumCoke: 75
			},
			products: {
				steelIngot: 100
			}
		},
		compactedSteelIngot: {
			icon: "steelIngot",
			name: "Alternate: Compacted Steel Ingot",
			ingredients: {
				ironOre: 22.5,
				compactedCoal: 11.3
			},
			products: {
				steelIngot: 37.5
			}
		},
		copperAlloyIngot: {
			icon: "copperIngot",
			name: "Alternate: Copper Alloy Ingot",
			ingredients: {
				copperOre: 50,
				ironOre: 25
			},
			products: {
				copperIngot: 100
			}
		},
		ironAlloyIngot: {
			icon: "ironIngot",
			name: "Alternate: Iron Alloy Ingot",
			ingredients: {
				ironOre: 20,
				copperOre: 20
			},
			products: {
				ironIngot: 50
			}
		},
		solidSteelIngot: {
			icon: "steelIngot",
			name: "Alternate: Solid Steel Ingot",
			ingredients: {
				ironIngot: 40,
				coal: 40
			},
			products: {
				steelIngot: 60
			}
		}
	},

	// Recipes for constructors.
	constructor: {
		copperPowder: {
			icon: "copperPowder",
			name: "Copper Powder",
			ingredients: {
				copperIngot: 300
			},
			products: {
				copperPowder: 50
			}
		},
		emptyFluidTank: {
			icon: "emptyFluidTank",
			name: "Empty Fluid Tank",
			ingredients: {
				aluminiumIngot: 60
			},
			products: {
				emptyFluidTank: 60
			}
		},
		aluminiumCasing: {
			icon: "aluminiumCasing",
			name: "Aluminum Casing",
			ingredients: {
				aluminiumIngot: 90
			},
			products: {
				aluminiumCasing: 60
			}
		},
		ironPlate: {
			icon: "ironPlate",
			name: "Iron Plate",
			ingredients: {
				ironIngot: 30
			},
			products: {
				ironPlate: 20
			}
		},
		ironRod: {
			icon: "ironRod",
			name: "Iron Rod",
			ingredients: {
				ironIngot: 15
			},
			products: {
				ironRod: 15
			}
		},
		concrete: {
			icon: "concrete",
			name: "Concrete",
			ingredients: {
				limestone: 45
			},
			products: {
				concrete: 15
			}
		},
		screw: {
			icon: "screw",
			name: "Screw",
			ingredients: {
				ironRod: 10
			},
			products: {
				screw: 40
			}
		},
		biocoal: {
			icon: "coal",
			name: "Alternate: Biocoal",
			ingredients: {
				biomass: 37.5
			},
			products: {
				coal: 45
			}
		},
		biomassCarapace: {
			icon: "biomass",
			name: "Biomass (Alien Carapace)",
			ingredients: {
				alienCarapace: 15
			},
			products: {
				biomass: 1500
			}
		},
		biomassOrgans: {
			icon: "biomass",
			name: "Biomass (Alien Organs)",
			ingredients: {
				alienOrgans: 7.5
			},
			products: {
				biomass: 1500
			}
		},
		biomassLeaves: {
			icon: "biomass",
			name: "Biomass (Leaves)",
			ingredients: {
				leaves: 120
			},
			products: {
				biomass: 60
			}
		},
		biomassMycelia: {
			icon: "biomass",
			name: "Biomass (Mycelia)",
			ingredients: {
				mycelia: 150
			},
			products: {
				biomass: 150
			}
		},
		biomassWood: {
			icon: "biomass",
			name: "Biomass (Wood)",
			ingredients: {
				wood: 60
			},
			products: {
				biomass: 300
			}
		},
		cable: {
			icon: "cable",
			name: "Cable",
			ingredients: {
				wire: 60
			},
			products: {
				cable: 30
			}
		},
		castedScrew: {
			icon: "screw",
			name: "Alternate: Casted Screw",
			ingredients: {
				ironIngot: 12.5
			},
			products: {
				screw: 50
			}
		},
		cateriumWire: {
			icon: "wire",
			name: "Alternate: Caterium Wire",
			ingredients: {
				cateriumIngot: 15
			},
			products: {
				wire: 120
			}
		},
		charcoal: {
			icon: "coal",
			name: "Alternate: Charcoal",
			ingredients: {
				wood: 15
			},
			products: {
				coal: 150
			}
		},
		colorCartridge: {
			icon: "colorCartridge",
			name: "Color Cartridge",
			ingredients: {
				flowerPetals: 37.5
			},
			products: {
				colorCartridge: 75
			}
		},
		copperSheet: {
			icon: "copperSheet",
			name: "Copper Sheet",
			ingredients: {
				copperIngot: 20
			},
			products: {
				copperSheet: 10
			}
		},
		emptyCanister: {
			icon: "emptyCanister",
			name: "Empty Canister",
			ingredients: {
				plastic: 30
			},
			products: {
				emptyCanister: 60
			}
		},
		ironWire: {
			icon: "wire",
			name: "Alternate: Iron Wire",
			ingredients: {
				ironIngot: 12.5
			},
			products: {
				wire: 22.5
			}
		},
		powerShard1: {
			icon: "powerShard",
			name: "Power Shard (1)",
			ingredients: {
				greenPowerSlug: 7.5
			},
			products: {
				powerShard: 7.5
			}
		},
		powerShard2: {
			icon: "powerShard",
			name: "Power Shard (2)",
			ingredients: {
				yellowPowerSlug: 5
			},
			products: {
				powerShard: 10
			}
		},
		powerShard3: {
			icon: "powerShard",
			name: "Power Shard (3)",
			ingredients: {
				purplePowerSlug: 2.5
			},
			products: {
				powerShard: 12.5
			}
		},
		quartzCrystal: {
			icon: "quartzCrystal",
			name: "Quartz Crystal",
			ingredients: {
				rawQuartz: 37.5
			},
			products: {
				quartzCrystal: 22.5
			}
		},
		quickwire: {
			icon: "quickwire",
			name: "Quickwire",
			ingredients: {
				cateriumIngot: 12
			},
			products: {
				quickwire: 60
			}
		},
		silica: {
			icon: "silica",
			name: "Silica",
			ingredients: {
				rawQuartz: 22.5
			},
			products: {
				silica: 37.5
			}
		},
		solidBiofuel: {
			icon: "solidBiofuel",
			name: "Solid Biofuel",
			ingredients: {
				biomass: 120
			},
			products: {
				solidBiofuel: 60
			}
		},
		spikedRebar: {
			icon: "spikedRebar",
			name: "Spiked Rebar",
			ingredients: {
				ironRod: 15
			},
			products: {
				spikedRebar: 15
			}
		},
		steelBeam: {
			icon: "steelBeam",
			name: "Steel Beam",
			ingredients: {
				steelIngot: 60
			},
			products: {
				steelBeam: 15
			}
		},
		steelCanister: {
			icon: "emptyCanister",
			name: "Alternate: Steel Canister",
			ingredients: {
				steelIngot: 60
			},
			products: {
				emptyCanister: 40
			}
		},
		steelPipe: {
			icon: "steelPipe",
			name: "Steel Pipe",
			ingredients: {
				steelIngot: 30
			},
			products: {
				steelPipe: 20
			}
		},
		steelRod: {
			icon: "ironRod",
			name: "Alternate: Steel rod",
			ingredients: {
				steelIngot: 12
			},
			products: {
				ironRod: 48
			}
		},
		steelScrew: {
			icon: "screw",
			name: "Alternate: Steel screw",
			ingredients: {
				steelBeam: 5
			},
			products: {
				screw: 260
			}
		},
		wire: {
			icon: "wire",
			name: "Wire",
			ingredients: {
				copperIngot: 15
			},
			products: {
				wire: 30
			}
		}
	},

	// Recipes for assemblers.
	assembler: {
		plutoniumFuelUnit: {
			icon: "plutoniumFuelRod",
			name: "Alternate: Plutonium Fuel Unit",
			ingredients: {
				encasedPlutoniumCell: 10,
				pressureConversionCube: 0.5
			},
			products: {
				plutoniumFuelRod: 0.5
			}
		},
		pressureConversionCube: {
			icon: "pressureConversionCube",
			name: "Pressure Conversion Cube",
			ingredients: {
				fusedModularFrame: 1.0,
				radioControlUnit: 2.0
			},
			products: {
				pressureConversionCube: 1
			}
		},
		encasedPlutoniumCell: {
			icon: "encasedPlutoniumCell",
			name: "Encased Plutonium Cell",
			ingredients: {
				plutoniumPellet: 10,
				concrete: 20
			},
			products: {
				encasedPlutoniumCell: 5
			}
		},
		assemblyDirectorSystem: {
			icon: "assemblyDirectorSystem",
			name: "Assembly Director System",
			ingredients: {
				adaptiveControlUnit: 1.5,
				supercomputer: 0.8
			},
			products: {
				assemblyDirectorSystem: 0.75
			}
		},
		alcladCasing: {
			icon: "aluminiumCasing",
			name: "Alternate: Alclad Casing",
			ingredients: {
				aluminiumIngot: 150,
				copperIngot: 75
			},
			products: {
				aluminiumCasing: 112.5
			}
		},
		reinforcedIronPlate: {
			icon: "reinforcedIronPlate",
			name: "Reinforced Iron Plate",
			ingredients: {
				ironPlate: 30,
				screw: 60
			},
			products: {
				reinforcedIronPlate: 5
			}
		},
		compactedCoal: {
			icon: "compactedCoal",
			name: "Compacted Coal",
			ingredients: {
				coal: 25,
				sulfur: 25
			},
			products: {
				compactedCoal: 25
			}
		},
		aiLimiter: {
			icon: "aiLimiter",
			name: "A.I. Limiter",
			ingredients: {
				copperSheet: 25,
				quickwire: 100
			},
			products: {
				aiLimiter: 5
			}
		},
		adheredIronPlate: {
			icon: "reinforcedIronPlate",
			name: "Alternate: Adhered Iron Plate",
			ingredients: {
				ironPlate: 11.25,
				rubber: 3.75
			},
			products: {
				reinforcedIronPlate: 3.75
			}
		},
		alcladAluminiumSheet: {
			icon: "alcladAluminiumSheet",
			name: "Alclad Aluminium Sheet",
			ingredients: {
				aluminiumIngot: 30,
				copperIngot: 10
			},
			products: {
				alcladAluminiumSheet: 30
			}
		},
		automatedWiring: {
			icon: "automatedWiring",
			name: "Automated Wiring",
			ingredients: {
				stator: 2.5,
				cable: 50
			},
			products: {
				automatedWiring: 2.5
			}
		},
		stator: {
			icon: "stator",
			name: "Stator",
			ingredients: {
				steelPipe: 15,
				wire: 40
			},
			products: {
				stator: 5
			}
		},
		blackPowder: {
			icon: "blackPowder",
			name: "Black Powder",
			ingredients: {
				coal: 7.5,
				sulfur: 15
			},
			products: {
				blackPowder: 7.5
			}
		},
		modularFrame: {
			icon: "modularFrame",
			name: "Modular Frame",
			ingredients: {
				reinforcedIronPlate: 3,
				ironRod: 12
			},
			products: {
				modularFrame: 2
			}
		},
		boltedFrame: {
			icon: "modularFrame",
			name: "Alternate: Bolted Frame",
			ingredients: {
				reinforcedIronPlate: 7.5,
				screw: 140
			},
			products: {
				modularFrame: 5
			}
		},
		boltedIronPlate: {
			icon: "reinforcedIronPlate",
			name: "Alternate: Bolted Iron Plate",
			ingredients: {
				ironPlate: 90,
				screw: 250
			},
			products: {
				reinforcedIronPlate: 15
			}
		},
		circuitBoard: {
			icon: "circuitBoard",
			name: "Circuit Board",
			ingredients: {
				copperSheet: 15,
				plastic: 30
			},
			products: {
				circuitBoard: 7.5
			}
		},
		cateriumCircuitBoard: {
			icon: "circuitBoard",
			name: "Alternate: Caterium Circuit Board",
			ingredients: {
				plastic: 12.5,
				quickwire: 37.5
			},
			products: {
				circuitBoard: 8.8
			}
		},
		cheapSilica: {
			icon: "silica",
			name: "Alternate: Cheap Silica",
			ingredients: {
				rawQuartz: 11.3,
				limestone: 11.8
			},
			products: {
				silica: 26.3
			}
		},
		coatedIronCanister: {
			icon: "emptyCanister",
			name: "Alternate: Coated Iron Canister",
			ingredients: {
				ironPlate: 30,
				copperSheet: 15
			},
			products: {
				emptyCanister: 60
			}
		},
		coatedIronPlate: {
			icon: "ironPlate",
			name: "Alternate: Coated Iron Plate",
			ingredients: {
				ironIngot: 50,
				plastic: 10
			},
			products: {
				ironPlate: 75
			}
		},
		rotor: {
			icon: "rotor",
			name: "Rotor",
			ingredients: {
				ironRod: 20,
				screw: 100
			},
			products: {
				rotor: 4
			}
		},
		copperRotor: {
			icon: "rotor",
			name: "Alternate: Copper Rotor",
			ingredients: {
				copperSheet: 22.5,
				screw: 195
			},
			products: {
				rotor: 11.3
			}
		},
		crystalComputer: {
			icon: "computer",
			name: "Alternate: Crystal Computer",
			ingredients: {
				circuitBoard: 7.5,
				crystalOscillator: 2.8
			},
			products: {
				computer: 2.8
			}
		},
		electrodeCircuitBoard: {
			icon: "circuitBoard",
			name: "Alternate: Electrode Circuit Board",
			ingredients: {
				rubber: 30,
				petroleumCoke: 45
			},
			products: {
				circuitBoard: 5
			}
		},
		electromagneticConnectionRod: {
			icon: "electromagneticControlRod",
			name: "Alternate: Electromagnetic Connection Rod",
			ingredients: {
				stator: 8,
				highSpeedConnector: 4
			},
			products: {
				electromagneticControlRod: 8
			}
		},
		electromagneticControlRod: {
			icon: "electromagneticControlRod",
			name: "Electromagnetic Control Rod",
			ingredients: {
				stator: 3,
				aiLimiter: 4
			},
			products: {
				electromagneticControlRod: 4
			}
		},
		encasedIndustrialBeam: {
			icon: "encasedIndustrialBeam",
			name: "Encased Industrial Beam",
			ingredients: {
				steelBeam: 24,
				concrete: 30
			},
			products: {
				encasedIndustrialBeam: 6
			}
		},
		encasedIndustrialPipe: {
			icon: "encasedIndustrialBeam",
			name: "Alternate: Encased Industrial Pipe",
			ingredients: {
				steelPipe: 28,
				concrete: 20
			},
			products: {
				encasedIndustrialBeam: 4
			}
		},
		fabric: {
			icon: "fabric",
			name: "Fabric",
			ingredients: {
				mycelia: 45,
				biomass: 75
			},
			products: {
				fabric: 15
			}
		},
		gunPowder: {
			icon: "blackPowder",
			name: "Alternate: Fine Black Powder (Gun Powder)",
			ingredients: {
				sulfur: 7.5,
				compactedCoal: 3.8
			},
			products: {
				blackPowder: 15
			}
		},
		fineConcrete: {
			icon: "concrete",
			name: "Alternate: Fine Concrete",
			ingredients: {
				silica: 7.5,
				limestone: 30
			},
			products: {
				concrete: 25
			}
		},
		fusedQuickwire: {
			icon: "quickwire",
			name: "Alternate: Fused Quickwire",
			ingredients: {
				cateriumIngot: 7.5,
				copperIngot: 37.5
			},
			products: {
				quickwire: 90
			}
		},
		fusedWire: {
			icon: "wire",
			name: "Alternate: Fused Wire",
			ingredients: {
				copperIngot: 12,
				cateriumIngot: 3
			},
			products: {
				wire: 90
			}
		},
		heatExchanger: {
			icon: "heatSink",
			name: "Alternate: Heat Exchanger",
			ingredients: {
				aluminiumCasing: 30,
				rubber: 30
			},
			products: {
				heatSink: 10
			}
		},
		heatSink: {
			icon: "heatSink",
			name: "Heat Sink",
			ingredients: {
				alcladAluminiumSheet: 37.5,
				copperSheet: 22.5
			},
			products: {
				heatSink: 7.5
			}
		},
		insulatedCable: {
			icon: "cable",
			name: "Alternate: Insulated Cable (Rubber Cable)",
			ingredients: {
				wire: 45,
				rubber: 30
			},
			products: {
				cable: 100
			}
		},
		motor: {
			icon: "motor",
			name: "Motor",
			ingredients: {
				rotor: 10,
				stator: 10
			},
			products: {
				motor: 5
			}
		},
		nobelisk: {
			icon: "nobelisk",
			name: "Nobelisk",
			ingredients: {
				blackPowder: 15,
				steelPipe: 30
			},
			products: {
				nobelisk: 3
			}
		},
		quickwireCable: {
			icon: "quickwire",
			name: "Alternate: Quickwire Cable",
			ingredients: {
				quickwire: 7.5,
				rubber: 5
			},
			products: {
				cable: 27.5
			}
		},
		quickwireStator: {
			icon: "stator",
			name: "Alternate: Quickwire Stator",
			ingredients: {
				steelPipe: 16,
				quickwire: 60
			},
			products: {
				stator: 8
			}
		},
		rubberConcrete: {
			icon: "concrete",
			name: "Alternate: Rubber Concrete",
			ingredients: {
				limestone: 50,
				rubber: 10
			},
			products: {
				concrete: 45
			}
		},
		siliconeCircuitBoard: {
			icon: "circuitBoard",
			name: "Alternate: Silicone Circuit Board",
			ingredients: {
				copperSheet: 27.5,
				silica: 27.5
			},
			products: {
				circuitBoard: 12.5
			}
		},
		smartPlating: {
			icon: "smartPlating",
			name: "Smart Plating",
			ingredients: {
				reinforcedIronPlate: 2,
				rotor: 2
			},
			products: {
				smartPlating: 2
			}
		},
		steelCoatedPlate: {
			icon: "ironPlate",
			name: "Alternate: Steel Coated Plate",
			ingredients: {
				steelIngot: 7.5,
				plastic: 5
			},
			products: {
				ironPlate: 45
			}
		},
		steelRotor: {
			icon: "rotor",
			name: "Alternate: Steel Rotor",
			ingredients: {
				steelPipe: 10,
				wire: 30
			},
			products: {
				rotor: 5
			}
		},
		steeledFrame: {
			icon: "modularFrame",
			name: "Alternate: Steeled Frame",
			ingredients: {
				reinforcedIronPlate: 2,
				steelPipe: 10
			},
			products: {
				modularFrame: 3
			}
		},
		stitchedIronPlate: {
			icon: "reinforcedIronPlate",
			name: "Alternate: Stitched Iron Plate",
			ingredients: {
				ironPlate: 18.8,
				wire: 37.5
			},
			products: {
				reinforcedIronPlate: 5.6
			}
		},
		versatileFramework: {
			icon: "versatileFramework",
			name: "Versatile Framework",
			ingredients: {
				modularFrame: 2.5,
				steelBeam: 30
			},
			products: {
				versatileFramework: 5
			}
		}
	},

	// Recipes for manufacturers
	manufacturer: {
		uraniumFuelRod: {
			icon: "uraniumFuelRod",
			name: "Uranium Fuel Rod",
			ingredients: {
				encasedUraniumCell: 20,
				encasedIndustrialBeam: 1.2,
				electromagneticControlRod: 2
			},
			products: {
				uraniumFuelRod: 0.4
			}
		},
		uraniumFuelUnit: {
			icon: "uraniumFuelRod",
			name: "Alternate: Uranium Fuel Unit",
			ingredients: {
				encasedUraniumCell: 20,
				electromagneticControlRod: 2,
				crystalOscillator: 0.6,
				beacon: 1.2
			},
			products: {
				uraniumFuelRod: 0.6
			}
		},
		thermalPropulsionRocket: {
			icon: "thermalPropulsionRocket",
			name: "Thermal Propulsion Rocket",
			ingredients: {
				modularEngine: 2.5,
				turboMotor: 1,
				coolingSystem: 3,
				fusedModularFrame: 1
			},
			products: {
				thermalPropulsionRocket: 1
			}
		},
		plutoniumFuelRod: {
			icon: "plutoniumFuelRod",
			name: "Plutonium Fuel Rod",
			ingredients: {
				encasedPlutoniumCell: 7.5,
				steelBeam: 4.5,
				electromagneticControlRod: 1.5,
				heatSink: 2.5
			},
			products: {
				plutoniumFuelRod: 0.3
			}
		},
		magneticFieldGenerator: {
			icon: "magneticFieldGenerator",
			name: "Magnetic Field Generator",
			ingredients: {
				versatileFramework: 2.5,
				electromagneticControlRod: 1,
				battery: 5
			},
			products: {
				magneticFieldGenerator: 1
			}
		},
		infusedUraniumCell: {
			icon: "encasedUraniumCell",
			name: "Alternate: Infused Uranium Cell",
			ingredients: {
				uranium: 25,
				silica: 15,
				sulfur: 25,
				quickwire: 75
			},
			products: {
				encasedUraniumCell: 20
			}
		},
		crystalOscillator: {
			icon: "crystalOscillator",
			name: "Crystal Oscillator",
			ingredients: {
				quartzCrystal: 18,
				cable: 14,
				reinforcedIronPlate: 2.5
			},
			products: {
				crystalOscillator: 1
			}
		},
		computer: {
			icon: "computer",
			name: "Computer",
			ingredients: {
				circuitBoard: 25,
				cable: 22.5,
				plastic: 45,
				screw: 130
			},
			products: {
				computer: 2.5
			}
		},
		highSpeedConnector: {
			icon: "highSpeedConnector",
			name: "High-Speed Connector",
			ingredients: {
				quickwire: 210,
				cable: 37.5,
				circuitBoard: 3.8
			},
			products: {
				highSpeedConnector: 3.75
			}
		},
		adaptiveControlUnit: {
			icon: "adaptiveControlUnit",
			name: "Adaptive Control Unit",
			ingredients: {
				automatedWiring: 7.5,
				circuitBoard: 5,
				heavyModularFrame: 1,
				computer: 1
			},
			products: {
				adaptiveControlUnit: 1
			}
		},
		automatedMiner: {
			icon: "portableMiner",
			name: "Alternate: Automated Miner",
			ingredients: {
				motor: 1,
				steelPipe: 4,
				ironRod: 4,
				ironPlate: 2
			},
			products: {
				portableMiner: 1
			}
		},
		beacon: {
			icon: "beacon",
			name: "Beacon",
			ingredients: {
				ironPlate: 22.5,
				ironRod: 7.5,
				wire: 112.5,
				cable: 15
			},
			products: {
				beacon: 7.5
			}
		},
		cateriumComputer: {
			icon: "computer",
			name: "Alternate: Caterium Computer",
			ingredients: {
				circuitBoard: 26.3,
				quickwire: 105,
				rubber: 45
			},
			products: {
				computer: 3.8
			}
		},
		classicBattery: {
			icon: "battery",
			name: "Alternate: Classic Battery",
			ingredients: {
				sulfur: 45,
				alcladAluminiumSheet: 52.5,
				plastic: 60,
				wire: 90
			},
			products: {
				battery: 30
			}
		},
		flexibleFramework: {
			icon: "versatileFramework",
			name: "Alternate: Flexible Framework",
			ingredients: {
				modularFrame: 3.8,
				steelBeam: 22.5,
				rubber: 30
			},
			products: {
				versatileFramework: 7.5
			}
		},
		gasFilter: {
			icon: "gasFilter",
			name: "Gas Filter",
			ingredients: {
				coal: 37.5,
				rubber: 15,
				fabric: 15
			},
			products: {
				gasFilter: 7.5
			}
		},
		heavyEncasedFrame: {
			icon: "heavyModularFrame",
			name: "Alternate: Heavy Encased Frame",
			ingredients: {
				modularFrame: 7.5,
				encasedIndustrialBeam: 9.375,
				steelPipe: 33.75,
				concrete: 20.625
			},
			products: {
				heavyModularFrame: 2.8125
			}
		},
		heavyFlexibleFrame: {
			icon: "heavyModularFrame",
			name: "Alternate: Heavy Flexible Frame",
			ingredients: {
				modularFrame: 18.75,
				encasedIndustrialBeam: 11.25,
				rubber: 75,
				screw: 390
			},
			products: {
				heavyModularFrame: 3.75
			}
		},
		heavyModularFrame: {
			icon: "heavyModularFrame",
			name: "Heavy Modular Frame",
			ingredients: {
				modularFrame: 10,
				steelPipe: 30,
				encasedIndustrialBeam: 10,
				screw: 200
			},
			products: {
				heavyModularFrame: 2
			}
		},
		highSpeedWiring: {
			icon: "automatedWiring",
			name: "Alternate: High-Speed Wiring",
			ingredients: {
				stator: 3.8,
				wire: 75,
				highSpeedConnector: 1.9
			},
			products: {
				automatedWiring: 7.5
			}
		},
		insulatedCrystalOscillator: {
			icon: "crystalOscillator",
			name: "Alternate: Insulated Crystal Oscillator",
			ingredients: {
				quartzCrystal: 18.8,
				rubber: 13.1,
				aiLimiter: 1.9
			},
			products: {
				crystalOscillator: 1.9
			}
		},
		iodineInfusedFilter: {
			icon: "iodineInfusedFilter",
			name: "Iodine Infused Filter",
			ingredients: {
				gasFilter: 3.8,
				quickwire: 30,
				aluminiumCasing: 3.8
			},
			products: {
				iodineInfusedFilter: 3.8
			}
		},
		modularEngine: {
			icon: "modularEngine",
			name: "Modular Engine",
			ingredients: {
				motor: 2,
				rubber: 15,
				smartPlating: 2
			},
			products: {
				modularEngine: 1
			}
		},
		plasticSmartPlating: {
			icon: "smartPlating",
			name: "Alternate: Plastic Smart Plating",
			ingredients: {
				reinforcedIronPlate: 2.5,
				rotor: 2.5,
				plastic: 7.5
			},
			products: {
				smartPlating: 5
			}
		},
		radioConnectionUnit: {
			icon: "radioControlUnit",
			name: "Alternate: Radio Control Unit",
			ingredients: {
				heatSink: 15,
				highSpeedConnector: 7.5,
				quartzCrystal: 45
			},
			products: {
				radioControlUnit: 3.8
			}
		},
		radioControlSystem: {
			icon: "radioControlUnit",
			name: "Alternate: Radio Control System",
			ingredients: {
				crystalOscillator: 1.5,
				circuitBoard: 15,
				aluminiumCasing: 90,
				rubber: 45
			},
			products: {
				radioControlUnit: 4.5
			}
		},
		radioControlUnit: {
			icon: "radioControlUnit",
			name: "Radio Control Unit",
			ingredients: {
				aluminiumCasing: 40,
				crystalOscillator: 1.3,
				computer: 1.3
			},
			products: {
				radioControlUnit: 2.5
			}
		},
		rifleCartridge: {
			icon: "rifleCartridge",
			name: "Rifle Cartridge",
			ingredients: {
				beacon: 3,
				steelPipe: 30,
				blackPowder: 30,
				rubber: 30
			},
			products: {
				rifleCartridge: 15
			}
		},
		rigourMotor: {
			icon: "motor",
			name: "Alternate: Rigour Motor",
			ingredients: {
				rotor: 3.8,
				stator: 3.8,
				crystalOscillator: 1.3
			},
			products: {
				motor: 7.5
			}
		},
		seismicNobelisk: {
			icon: "nobelisk",
			name: "Alternate: Seismic Nobelisk",
			ingredients: {
				blackPowder: 12,
				steelPipe: 12,
				crystalOscillator: 1.5
			},
			products: {
				nobelisk: 6
			}
		},
		signalBeacon: {
			icon: "beacon",
			name: "Alternate: Signal Beacon",
			ingredients: {
				steelBeam: 2,
				steelPipe: 8,
				crystalOscillator: 0.5
			},
			products: {
				beacon: 10
			}
		},
		siliconeHighSpeedConnector: {
			icon: "highSpeedConnector",
			name: "Alternate: Silicone High-Speed Connector",
			ingredients: {
				quickwire: 90,
				silica: 37.5,
				circuitBoard: 3
			},
			products: {
				highSpeedConnector: 3
			}
		},
		superStateComputer: {
			icon: "supercomputer",
			name: "Alternate: Super-State Computer",
			ingredients: {
				computer: 3.6,
				electromagneticControlRod: 2.4,
				battery: 24,
				wire: 54
			},
			products: {
				supercomputer: 2.4
			}
		},
		supercomputer: {
			icon: "supercomputer",
			name: "Supercomputer",
			ingredients: {
				computer: 3.8,
				aiLimiter: 3.8,
				highSpeedConnector: 5.6,
				plastic: 52.5
			},
			products: {
				supercomputer: 1.9
			}
		},
		turboMotor: {
			icon: "turboMotor",
			name: "Turbo Motor",
			ingredients: {
				coolingSystem: 7.5,
				radioControlUnit: 3.75,
				motor: 7.5,
				rubber: 45
			},
			products: {
				turboMotor: 1.9
			}
		},
		turboPressureMotor: {
			icon: "turboMotor",
			name: "Alternate: Turbo Pressure Motor",
			ingredients: {
				motor: 7.5,
				pressureConversionCube: 1.875,
				packagedNitrogenGas: 45,
				stator: 15
			},
			products: {
				turboMotor: 3.75
			}
		},
		turboElectricMotor: {
			icon: "turboMotor",
			name: "Alternate: Turbo Electric Motor",
			ingredients: {
				motor: 6.5625,
				radioControlUnit: 8.4375,
				electromagneticControlRod: 4.6875,
				rotor: 6.5625
			},
			products: {
				turboMotor: 2.8125
			}
		}
	},

	// Recipes for refineries.
	refinery: {
		sulfuricAcid: {
			icon: "sulfuricAcid",
			name: "Sulfuric Acid",
			ingredients: {
				sulfur: 50,
				water: 50
			},
			products: {
				sulfuricAcid: 50
			}
		},
		electrodeAluminiumScrap: {
			icon: "aluminiumScrap",
			name: "Alternate: Electrode - Aluminium Scrap",
			ingredients: {
				aluminaSolution: 180,
				petroleumCoke: 60
			},
			products: {
				aluminiumScrap: 300,
				water: 105
			}
		},
		sloppyAlumina: {
			icon: "aluminaSolution",
			name: "Alternate: Sloppy Alumina",
			ingredients: {
				bauxite: 200,
				water: 200
			},
			products: {
				aluminaSolution: 240
			}
		},
		plastic: {
			icon: "plastic",
			name: "Plastic",
			ingredients: {
				crudeOil: 30
			},
			products: {
				plastic: 20,
				heavyOilResidue: 10
			}
		},
		aluminiumScrap: {
			icon: "aluminiumScrap",
			name: "Aluminum Scrap",
			ingredients: {
				aluminaSolution: 240,
				coal: 120
			},
			products: {
				aluminiumScrap: 360,
				water: 120
			}
		},
		aluminaSolution: {
			icon: "aluminaSolution",
			name: "Alumina Solution",
			ingredients: {
				bauxite: 120,
				water: 180
			},
			products: {
				aluminaSolution: 120,
				silica: 50
			}
		},
		petroleumCoke: {
			icon: "petroleumCoke",
			name: "Petroleum Coke",
			ingredients: {
				heavyOilResidue: 40
			},
			products: {
				petroleumCoke: 120
			}
		},
		rubber: {
			icon: "rubber",
			name: "Rubber",
			ingredients: {
				crudeOil: 30
			},
			products: {
				rubber: 20,
				heavyOilResidue: 20
			}
		},
		coatedCable: {
			icon: "cable",
			name: "Alternate: Coated Cable",
			ingredients: {
				wire: 37.5,
				heavyOilResidue: 15
			},
			products: {
				cable: 67.5
			}
		},
		dilutedPackagedFuel: {
			icon: "packagedFuel",
			name: "Alternate: Diluted Packaged Fuel",
			ingredients: {
				heavyOilResidue: 30,
				packagedWater: 60
			},
			products: {
				packagedFuel: 60
			}
		},
		fuel: {
			icon: "fuel",
			name: "Fuel",
			ingredients: {
				crudeOil: 60
			},
			products: {
				fuel: 40,
				polymerResin: 30
			}
		},
		altHeavyOilResidue: {
			icon: "heavyOilResidue",
			name: "Alternate: Heavy Oil Residue",
			ingredients: {
				crudeOil: 30
			},
			products: {
				heavyOilResidue: 40,
				polymerResin: 20
			}
		},
		liquidBiofuel: {
			icon: "liquidBiofuel",
			name: "Liquid Biofuel",
			ingredients: {
				solidBiofuel: 90,
				water: 45
			},
			products: {
				liquidBiofuel: 60
			}
		},
		polyesterFabric: {
			icon: "fabric",
			name: "Alternate: Polyester Fabric",
			ingredients: {
				polymerResin: 80,
				water: 50
			},
			products: {
				fabric: 5
			}
		},
		altPolymerResin: {
			icon: "polymerResin",
			name: "Alternate: Polymer Resin",
			ingredients: {
				crudeOil: 60
			},
			products: {
				polymerResin: 130,
				heavyOilResidue: 20
			}
		},
		pureCateriumIngot: {
			icon: "cateriumIngot",
			name: "Alternate: Pure Caterium Ingot",
			ingredients: {
				cateriumOre: 24,
				water: 24
			},
			products: {
				cateriumIngot: 12
			}
		},
		pureCopperIngot: {
			icon: "copperIngot",
			name: "Alternate: Pure Copper Ingot",
			ingredients: {
				copperOre: 15,
				water: 10
			},
			products: {
				copperIngot: 37.5
			}
		},
		pureIronIngot: {
			icon: "ironIngot",
			name: "Alternate: Pure Iron Ingot",
			ingredients: {
				ironOre: 35,
				water: 20
			},
			products: {
				ironIngot: 65
			}
		},
		pureQuartzCrystal: {
			icon: "quartzCrystal",
			name: "Alternate: Pure Quartz Crystal",
			ingredients: {
				rawQuartz: 67.5,
				water: 37.5
			},
			products: {
				quartzCrystal: 52.5
			}
		},
		recycledPlastic: {
			icon: "plastic",
			name: "Alternate: Recycled Plastic",
			ingredients: {
				rubber: 30,
				fuel: 30
			},
			products: {
				plastic: 60
			}
		},
		recycledRubber: {
			icon: "rubber",
			name: "Alternate: Recycled Rubber",
			ingredients: {
				plastic: 30,
				fuel: 30
			},
			products: {
				rubber: 60
			}
		},
		residualFuel: {
			icon: "fuel",
			name: "Residual Fuel",
			ingredients: {
				heavyOilResidue: 60
			},
			products: {
				fuel: 40
			}
		},
		residualPlastic: {
			icon: "plastic",
			name: "Residual Plastic",
			ingredients: {
				polymerResin: 60,
				water: 20
			},
			products: {
				plastic: 20
			}
		},
		residualRubber: {
			icon: "rubber",
			name: "Residual Rubber",
			ingredients: {
				polymerResin: 40,
				water: 40
			},
			products: {
				rubber: 20
			}
		},
		steamedCopperSheet: {
			icon: "copperSheet",
			name: "Alternate: Steamed Copper Sheet",
			ingredients: {
				copperIngot: 22.5,
				water: 22.5
			},
			products: {
				copperSheet: 22.5
			}
		},
		turboHeavyFuel: {
			icon: "turbofuel",
			name: "Alternate: Turbo Heavy Fuel",
			ingredients: {
				heavyOilResidue: 37.5,
				compactedCoal: 30
			},
			products: {
				turbofuel: 30
			}
		},
		turbofuel: {
			icon: "turbofuel",
			name: "Alternate: Turbofuel",
			ingredients: {
				fuel: 22.5,
				compactedCoal: 15
			},
			products: {
				turbofuel: 18.8
			}
		},
		wetConcrete: {
			icon: "concrete",
			name: "Alternate: Wet Concrete",
			ingredients: {
				limestone: 120,
				water: 100
			},
			products: {
				concrete: 80
			}
		}
	},

	// Recipes for packager.
	packager: {
		packagedNitricAcid: {
			icon: "packagedNitricAcid",
			name: "Packaged Nitric Acid",
			ingredients: {
				nitricAcid: 30,
				emptyFluidTank: 30
			},
			products: {
				packagedNitricAcid: 30
			}
		},
		unpackageNitricAcid: {
			icon: "nitricAcid",
			name: "Unpackage Nitric Acid",
			ingredients: {
				packagedNitricAcid: 20
			},
			products: {
				nitricAcid: 20,
				emptyFluidTank: 20
			}
		},
		packagedNitrogenGas: {
			icon: "packagedNitrogenGas",
			name: "Packaged Nitrogen Gas",
			ingredients: {
				nitrogenGas: 240,
				emptyFluidTank: 60
			},
			products: {
				packagedNitrogenGas: 60
			}
		},
		unpackageNitrogenGas: {
			icon: "nitrogenGas",
			name: "Unpackage Nitrogen Gas",
			ingredients: {
				packagedNitrogenGas: 60
			},
			products: {
				nitrogenGas: 60,
				emptyCanister: 60
			}
		},
		packagedSulfuricAcid: {
			icon: "packagedSulfuricAcid",
			name: "Packaged Sulfuric Acid",
			ingredients: {
				sulfuricAcid: 40,
				emptyCanister: 40
			},
			products: {
				packagedSulfuricAcid: 40
			}
		},
		unpackageSulfuricAcid: {
			icon: "sulfuricAcid",
			name: "Unpackage Sulfuric Acid",
			ingredients: {
				packagedSulfuricAcid: 60
			},
			products: {
				sulfuricAcid: 60,
				emptyCanister: 60
			}
		},
		packagedAluminaSolution: {
			icon: "packagedAluminaSolution",
			name: "Packaged Alumina Solution",
			ingredients: {
				aluminaSolution: 120,
				emptyCanister: 120
			},
			products: {
				packagedAluminaSolution: 120
			}
		},
		unpackageAluminaSolution: {
			icon: "aluminaSolution",
			name: "Unpackage Alumina Solution",
			ingredients: {
				packagedAluminaSolution: 120
			},
			products: {
				aluminaSolution: 120,
				emptyCanister: 120
			}
		},
		packagedWater: {
			icon: "packagedWater",
			name: "Packaged Water",
			ingredients: {
				water: 60,
				emptyCanister: 60
			},
			products: {
				packagedWater: 60
			}
		},
		packagedFuel: {
			icon: "packagedFuel",
			name: "Packaged Fuel",
			ingredients: {
				fuel: 40,
				emptyCanister: 40
			},
			products: {
				packagedFuel: 40
			}
		},
		packagedHeavyOilResidue: {
			icon: "packagedHeavyOilResidue",
			name: "Packaged Heavy Oil Residue",
			ingredients: {
				heavyOilResidue: 30,
				emptyCanister: 30
			},
			products: {
				packagedHeavyOilResidue: 30
			}
		},
		packagedLiquidBiofuel: {
			icon: "packagedLiquidBiofuel",
			name: "Packaged Liquid Biofuel",
			ingredients: {
				liquidBiofuel: 40,
				emptyCanister: 40
			},
			products: {
				packagedLiquidBiofuel: 40
			}
		},
		packagedOil: {
			icon: "packagedOil",
			name: "Packaged Oil",
			ingredients: {
				crudeOil: 30,
				emptyCanister: 30
			},
			products: {
				packagedOil: 30
			}
		},
		packagedTurbofuel: {
			icon: "packagedTurbofuel",
			name: "Packaged Turbofuel",
			ingredients: {
				turbofuel: 20,
				emptyCanister: 20
			},
			products: {
				packagedTurbofuel: 20
			}
		},
		unpackageFuel: {
			icon: "fuel",
			name: "Unpackage Fuel",
			ingredients: {
				packagedFuel: 60
			},
			products: {
				fuel: 60,
				emptyCanister: 60
			}
		},
		unpackageHeavyOilResidue: {
			icon: "heavyOilResidue",
			name: "Unpackage Heavy Oil Residue",
			ingredients: {
				packagedHeavyOilResidue: 20
			},
			products: {
				heavyOilResidue: 20,
				emptyCanister: 20
			}
		},
		unpackageLiquidBiofuel: {
			icon: "liquidBiofuel",
			name: "Unpackage Liquid Biofuel",
			ingredients: {
				packagedLiquidBiofuel: 60
			},
			products: {
				liquidBiofuel: 60,
				emptyCanister: 60
			}
		},
		unpackageOil: {
			icon: "crudeOil",
			name: "Unpackage Oil",
			ingredients: {
				packagedOil: 60
			},
			products: {
				crudeOil: 60,
				emptyCanister: 60
			}
		},
		unpackageTurbofuel: {
			icon: "turbofuel",
			name: "Unpackage Turbofuel",
			ingredients: {
				packagedTurbofuel: 20
			},
			products: {
				turbofuel: 20,
				emptyCanister: 20
			}
		},
		unpackageWater: {
			icon: "water",
			name: "Unpackage Water",
			ingredients: {
				packagedWater: 120
			},
			products: {
				water: 120,
				emptyCanister: 120
			}
		}
	},

	// "Recipe" for oil extractor, describing production of Crude Oil. Written on normal production (*1)
	oilExtractor: {
		crudeOil: {
			icon: "crudeOil",
			name: "Crude Oil",
			products: {
				crudeOil: 120
			}
		}
	},

	// "Recipe" for water extractor, describing production of water.
	waterExtractor: {
		// Water Extractor
		water: {
			icon: "water",
			name: "Water",
			products: {
				water: 120
			}
		}
	},

	// "Recipe" for coal generator, describing ingredients for power generating.
	coalGenerator: {
		coalPower: {
			name: "Coal",
			icon: "coal",
			ingredients: {
				coal: 15,
				water: 45
			}
		},
		compactedCoalPower: {
			name: "Compacted Coal",
			icon: "compactedCoal",
			ingredients: {
				compactedCoal: 7.143,
				water: 45
			}
		},
		petroleumCokePower: {
			name: "Petroleum Coke",
			icon: "petroleumCoke",
			ingredients: {
				petroleumCoke: 25,
				water: 45
			}
		}
	},

	// Recipes for Fuel generators, describing ingredients for generating power.
	fuelGenerator: {
		fuelPower: {
			name: "Fuel",
			icon: "fuel",
			ingredients: {
				fuel: 12
			}
		},
		liquidBiofuelPower: {
			name: "Liquid Biofuel",
			icon: "liquidBiofuel",
			ingredients: {
				liquidBiofuel: 12
			}
		},
		turbofuelPower: {
			name: "Turbofuel",
			icon: "turbofuel",
			ingredients: {
				turbofuel: 4.5
			}
		}
	},

	// Recipe for Nuclear Power Plant, describing ingredients and products of generated power.
	nuclearPowerPlant: {
		uraniumWaste: {
			name: "Uranium Waste",
			icon: "uraniumWaste",
			ingredients: {
				water: 300,
				uraniumFuelRod: 0.2
			},
			products: {
				uraniumWaste: 10
			}
		},
		plutoniumWaste: {
			name: "Plutonium Waste",
			icon: "plutoniumWaste",
			ingredients: {
				plutoniumFuelRod: 0.1,
				water: 300
			},
			products: {
				plutoniumWaste: 1
			}
		}
	},

	blender: {
		battery: {
			icon: "battery",
			name: "Battery",
			ingredients: {
				sulfuricAcid: 50,
				aluminaSolution: 40,
				aluminiumCasing: 20
			},
			products: {
				battery: 20,
				water: 30
			}
		},
		coolingDevice: {
			icon: "coolingSystem",
			name: "Alternate: Cooling Device",
			ingredients: {
				heatSink: 9.4,
				motor: 1.9,
				nitrogenGas: 45
			},
			products: {
				coolingSystem: 3.8
			}
		},
		coolingSystem: {
			icon: "coolingSystem",
			name: "Cooling System",
			ingredients: {
				heatSink: 12,
				rubber: 12,
				water: 30,
				nitrogenGas: 150
			},
			products: {
				coolingSystem: 6
			}
		},
		dilutedFuel: {
			icon: "fuel",
			name: "Alternate: Diluted Fuel",
			ingredients: {
				heavyOilResidue: 50,
				water: 100
			},
			products: {
				fuel: 100
			}
		},
		encasedUraniumCell: {
			icon: "encasedUraniumCell",
			name: "Encased Uranium Cell",
			ingredients: {
				uranium: 50,
				concrete: 15,
				sulfuricAcid: 40
			},
			products: {
				encasedUraniumCell: 25,
				sulfuricAcid: 10
			}
		},
		fertileUranium: {
			icon: "nonFissileUranium",
			name: "Alternate: Fertile Uranium",
			ingredients: {
				uranium: 25,
				uraniumWaste: 25,
				nitricAcid: 15,
				sulfuricAcid: 25
			},
			products: {
				nonFissileUranium: 100,
				water: 40
			}
		},
		fusedModularFrame: {
			icon: "fusedModularFrame",
			name: "Fused Modular Frame",
			ingredients: {
				heavyModularFrame: 1.5,
				aluminiumCasing: 75,
				nitrogenGas: 37.5
			},
			products: {
				fusedModularFrame: 1.5
			}
		},
		heatFusedFrame: {
			icon: "fusedModularFrame",
			name: "Alternate: Heat-Fused Frame",
			ingredients: {
				heavyModularFrame: 3,
				aluminiumIngot: 150,
				nitricAcid: 24,
				fuel: 30
			},
			products: {
				fusedModularFrame: 3
			}
		},
		instantScrap: {
			icon: "aluminiumScrap",
			name: "Alternate: Instant Scrap",
			ingredients: {
				bauxite: 150,
				coal: 100,
				sulfuricAcid: 50,
				water: 60
			},
			products: {
				aluminiumScrap: 300,
				water: 50
			}
		},
		nitricAcid: {
			icon: "nitricAcid",
			name: "Nitric Acid",
			ingredients: {
				nitrogenGas: 120,
				water: 30,
				ironPlate: 10
			},
			products: {
				nitricAcid: 30
			}
		},
		nonFissileUranium: {
			icon: "nonFissileUranium",
			name: "Non-fissile Uranium",
			ingredients: {
				uraniumWaste: 37.5,
				silica: 25,
				nitricAcid: 15,
				sulfuricAcid: 15
			},
			products: {
				nonFissileUranium: 50,
				water: 15
			}
		},
		turboBlendFuel: {
			icon: "turbofuel",
			name: "Alternate: Turbo Blend Fuel",
			ingredients: {
				fuel: 15,
				heavyOilResidue: 30,
				sulfur: 22.5,
				petroleumCoke: 22.5
			},
			products: {
				turbofuel: 45
			}
		}
	},

	particleAccelerator: {
		plutoniumPellet: {
			icon: "plutoniumPellet",
			name: "Plutonium Pellet",
			ingredients: {
				nonFissileUranium: 100,
				uraniumWaste: 25
			},
			products: {
				plutoniumPellet: 30
			}
		},
		nuclearPasta: {
			icon: "nuclearPasta",
			name: "Nuclear Pasta",
			ingredients: {
				copperPowder: 100,
				pressureConversionCube: 0.5
			},
			products: {
				nuclearPasta: 0.5
			}
		},
		instantPlutoniumCell: {
			icon: "encasedPlutoniumCell",
			name: "Alternate: Instant Plutonium Cell",
			ingredients: {
				nonFissileUranium: 75,
				aluminiumCasing: 10
			},
			products: {
				encasedPlutoniumCell: 10
			}
		},
	},

	// Specials, that not come from any recipe or comes from variants.
	notAssigned: {
		wood: {
			name: "Wood",
			icon: "wood"
		},
		flowerPetals: {
			name: "Flower Petals",
			icon: "flowerPetals"
		},
		alienCarapace: {
			name: "Alien Carapace",
			icon: "alienCarapace",
		},
		alienOrgans: {
			name: "Alien Organs",
			icon: "alienOrgans"
		},
		leaves: {
			name: "Leaves",
			icon: "leaves"
		},
		mycelia: {
			name: "Mycelia",
			icon: "mycelia"
		},
		biomass: {
			name: "Biomass",
			icon: "biomass"
		},
		greenPowerSlug: {
			name: "Green Power Slug",
			icon: "greenPowerSlug"
		},
		yellowPowerSlug: {
			name: "Yellow Power Slug",
			icon: "yellowPowerSlug"
		},
		purplePowerSlug: {
			name: "Purple Power Slug",
			icon: "purplePowerSlug"
		},
		powerShard: {
			name: "Power Shard",
			icon: "powerShard"
		},
		polymerResin: {
			name: "Polymer Resin",
			icon: "polymerResin"
		},
		heavyOilResidue: {
			name: "Heavy Oil Residue",
			icon: "heavyOilResidue"
		},
		portableMiner: {
			name: "Portable Miner",
			icon: "portableMiner"
		}
	}
};
