let keywords = ["@null","@air","@spawn","@cliff","@build1","@build2","@build3","@build4","@build5","@build6","@build7","@build8","@build9","@build10","@build11","@build12","@build13","@build14","@build15","@build16","@deep-water","@shallow-water","@tainted-water","@deep-tainted-water","@darksand-tainted-water","@sand-water","@darksand-water","@tar","@pooled-cryofluid","@molten-slag","@space","@empty","@stone","@crater-stone","@char","@basalt","@hotrock","@magmarock","@sand-floor","@darksand","@dirt","@mud","@dacite","@rhyolite","@rhyolite-crater","@rough-rhyolite","@regolith","@yellow-stone","@carbon-stone","@ferric-stone","@ferric-craters","@beryllic-stone","@crystalline-stone","@crystal-floor","@yellow-stone-plates","@red-stone","@dense-red-stone","@red-ice","@arkycite-floor","@arkyic-stone","@rhyolite-vent","@carbon-vent","@arkyic-vent","@yellow-stone-vent","@red-stone-vent","@crystalline-vent","@redmat","@bluemat","@grass","@salt","@snow","@ice","@ice-snow","@shale","@moss","@core-zone","@spore-moss","@stone-wall","@spore-wall","@dirt-wall","@dacite-wall","@ice-wall","@snow-wall","@dune-wall","@regolith-wall","@yellow-stone-wall","@rhyolite-wall","@carbon-wall","@ferric-stone-wall","@beryllic-stone-wall","@arkyic-wall","@crystalline-stone-wall","@red-ice-wall","@red-stone-wall","@red-diamond-wall","@sand-wall","@salt-wall","@shrubs","@shale-wall","@spore-pine","@snow-pine","@pine","@white-tree-dead","@white-tree","@spore-cluster","@redweed","@pur-bush","@yellowcoral","@boulder","@snow-boulder","@shale-boulder","@sand-boulder","@dacite-boulder","@basalt-boulder","@carbon-boulder","@ferric-boulder","@beryllic-boulder","@yellow-stone-boulder","@arkyic-boulder","@crystal-cluster","@vibrant-crystal-cluster","@crystal-blocks","@crystal-orbs","@crystalline-boulder","@red-ice-boulder","@rhyolite-boulder","@red-stone-boulder","@metal-floor","@metal-floor-damaged","@metal-floor-2","@metal-floor-3","@metal-floor-4","@metal-floor-5","@dark-panel-1","@dark-panel-2","@dark-panel-3","@dark-panel-4","@dark-panel-5","@dark-panel-6","@dark-metal","@pebbles","@tendrils","@ore-copper","@ore-lead","@ore-scrap","@ore-coal","@ore-titanium","@ore-thorium","@ore-beryllium","@ore-tungsten","@ore-crystal-thorium","@ore-wall-thorium","@ore-wall-beryllium","@graphitic-wall","@ore-wall-tungsten","@graphite-press","@multi-press","@silicon-smelter","@silicon-crucible","@kiln","@plastanium-compressor","@phase-weaver","@surge-smelter","@cryofluid-mixer","@pyratite-mixer","@blast-mixer","@melter","@separator","@disassembler","@spore-press","@pulverizer","@coal-centrifuge","@incinerator","@silicon-arc-furnace","@electrolyzer","@atmospheric-concentrator","@oxidation-chamber","@electric-heater","@slag-heater","@phase-heater","@heat-redirector","@heat-router","@slag-incinerator","@carbide-crucible","@slag-centrifuge","@surge-crucible","@cyanogen-synthesizer","@phase-synthesizer","@heat-reactor","@copper-wall","@copper-wall-large","@titanium-wall","@titanium-wall-large","@plastanium-wall","@plastanium-wall-large","@thorium-wall","@thorium-wall-large","@phase-wall","@phase-wall-large","@surge-wall","@surge-wall-large","@door","@door-large","@scrap-wall","@scrap-wall-large","@scrap-wall-huge","@scrap-wall-gigantic","@thruster","@beryllium-wall","@beryllium-wall-large","@tungsten-wall","@tungsten-wall-large","@blast-door","@reinforced-surge-wall","@reinforced-surge-wall-large","@carbide-wall","@carbide-wall-large","@shielded-wall","@mender","@mend-projector","@overdrive-projector","@overdrive-dome","@force-projector","@shock-mine","@radar","@build-tower","@regen-projector","@shockwave-tower","@shield-projector","@large-shield-projector","@conveyor","@titanium-conveyor","@plastanium-conveyor","@armored-conveyor","@junction","@bridge-conveyor","@phase-conveyor","@sorter","@inverted-sorter","@router","@distributor","@overflow-gate","@underflow-gate","@mass-driver","@duct","@armored-duct","@duct-router","@overflow-duct","@underflow-duct","@duct-bridge","@duct-unloader","@surge-conveyor","@surge-router","@unit-cargo-loader","@unit-cargo-unload-point","@mechanical-pump","@rotary-pump","@impulse-pump","@conduit","@pulse-conduit","@plated-conduit","@liquid-router","@liquid-container","@liquid-tank","@liquid-junction","@bridge-conduit","@phase-conduit","@reinforced-pump","@reinforced-conduit","@reinforced-liquid-junction","@reinforced-bridge-conduit","@reinforced-liquid-router","@reinforced-liquid-container","@reinforced-liquid-tank","@power-node","@power-node-large","@surge-tower","@diode","@battery","@battery-large","@combustion-generator","@thermal-generator","@steam-generator","@differential-generator","@rtg-generator","@solar-panel","@solar-panel-large","@thorium-reactor","@impact-reactor","@beam-node","@beam-tower","@beam-link","@turbine-condenser","@chemical-combustion-chamber","@pyrolysis-generator","@flux-reactor","@neoplasia-reactor","@mechanical-drill","@pneumatic-drill","@laser-drill","@blast-drill","@water-extractor","@cultivator","@oil-extractor","@vent-condenser","@cliff-crusher","@plasma-bore","@large-plasma-bore","@impact-drill","@eruption-drill","@core-shard","@core-foundation","@core-nucleus","@core-bastion","@core-citadel","@core-acropolis","@container","@vault","@unloader","@reinforced-container","@reinforced-vault","@duo","@scatter","@scorch","@hail","@wave","@lancer","@arc","@parallax","@swarmer","@salvo","@segment","@tsunami","@fuse","@ripple","@cyclone","@foreshadow","@spectre","@meltdown","@breach","@diffuse","@sublimate","@titan","@disperse","@afflict","@lustre","@scathe","@smite","@malign","@ground-factory","@air-factory","@naval-factory","@additive-reconstructor","@multiplicative-reconstructor","@exponential-reconstructor","@tetrative-reconstructor","@repair-point","@repair-turret","@tank-fabricator","@ship-fabricator","@mech-fabricator","@tank-refabricator","@mech-refabricator","@ship-refabricator","@prime-refabricator","@tank-assembler","@ship-assembler","@mech-assembler","@basic-assembler-module","@unit-repair-tower","@payload-conveyor","@payload-router","@reinforced-payload-conveyor","@reinforced-payload-router","@payload-mass-driver","@large-payload-mass-driver","@small-deconstructor","@deconstructor","@constructor","@large-constructor","@payload-loader","@payload-unloader","@power-source","@power-void","@item-source","@item-void","@liquid-source","@liquid-void","@payload-source","@payload-void","@heat-source","@illuminator","@legacy-mech-pad","@legacy-unit-factory","@legacy-unit-factory-air","@legacy-unit-factory-ground","@command-center","@launch-pad","@interplanetary-accelerator","@message","@switch","@micro-processor","@logic-processor","@hyper-processor","@memory-cell","@memory-bank","@logic-display","@large-logic-display","@canvas","@reinforced-message","@world-processor","@world-cell","@world-message","@copper","@lead","@metaglass","@graphite","@sand","@coal","@titanium","@thorium","@scrap","@silicon","@plastanium","@phase-fabric","@surge-alloy","@spore-pod","@blast-compound","@pyratite","@beryllium","@tungsten","@oxide","@carbide","@fissile-matter","@dormant-cyst","@water","@slag","@oil","@cryofluid","@neoplasm","@arkycite","@gallium","@ozone","@hydrogen","@nitrogen","@cyanogen","@dagger","@mace","@fortress","@scepter","@reign","@nova","@pulsar","@quasar","@vela","@corvus","@crawler","@atrax","@spiroct","@arkyid","@toxopid","@flare","@horizon","@zenith","@antumbra","@eclipse","@mono","@poly","@mega","@quad","@oct","@risso","@minke","@bryde","@sei","@omura","@retusa","@oxynoe","@cyerce","@aegires","@navanax","@alpha","@beta","@gamma","@stell","@locus","@precept","@vanquish","@conquer","@merui","@cleroi","@anthicus","@anthicus-missile","@tecta","@collaris","@elude","@avert","@obviate","@quell","@quell-missile","@disrupt","@disrupt-missile","@renale","@latum","@evoke","@incite","@emanate","@block","@manifold","@assembly-drone","@scathe-missile","@turret-unit-build-tower","@solid","@pi","@time","@tick","@minute","@waveNumber","@waveTime","@degToRad","@radToDeg","@links","@ctrlProcessor","@ctrlPlayer","@ctrlCommand","@crux","@sharded","@derelict","@malis","@blue","@green","@unitCount","@blockCount","@liquidCount","@itemCuont","@this","@thisx","@thisy","@unit","@counter","@maph","@mapw","@air","@ipt","@totalItems","@firstItem","@totalLiquds","@totalPower","@itemCapacity","@liquidCapacity","@powerNetStored","@powerNetCapacity","@powerNetIn","@powerNetOut","@ammo","@ammoCapacity","@health","@maxHealth","@heat","@efficiency","@progress","@timescale","@rotation","@x","@y","@shootX","@shootY","@size","@dead","@range","@shooting","@boosting","@mineX","@mineY","@mine","@speed","@team","@type","@flag","@controlled","@controller","@name","@payLoadCount","@payLoadType","@enabled","@config","@color"]; 
// allowed word2 in write and read
let reg1 = new RegExp("^cell\\d{1,999}$");
let reg2 = new RegExp("^bank\\d{1,999}$");
// allowed word1 in drawflush and pringfush
let reg3 = new RegExp("^display\\d{1,999}$");
let reg4 = new RegExp("^message\\d{1,999}$");
// allowed word2 in draw
let objDraw = {
	clear: {
		words: 3
	},
	color: {
		words: 4
	},
	col: {
		words: 1
	},
	stroke: {
		words: 1
	},
	line: {
		words: 4
	},
	rect: {
		words: 4
	},
	lineRect: {
		words: 4
	},
	poly: {
		words: 5
	},
	triangle: {
		words: 6
	},
	image: {
		words: 3,
		keywords: true
	}
};

// allowed word2 in control
let objControl = {
	enabled: {
		words: 3
	},
	shoot: {
		words: 6
	},
	shootp: {
		words: 4
	},
	config: {
		words: 3
	},
	color: {
		words: 3
	}
};

// allowed word1 and it other for ucontrol
let objUcontrol = {
		idle: "idle",

		stop: "stop",

		move: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			}
		},

		approach: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w4: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			}
		},

		boost: {
			w2: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			}
		},

		target: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w4: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			}
		},

		targetp: {
			w2: {
				words: true,
				numbers: false,
				keywords: false,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			}
		},

		itemDrop: {
			w2: {
				words: true,
				numbers: false,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			}
		},

		itemTake: {
			w2: {
				words: true,
				numbers: false,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: false,
				color: false,
				allowedWords: false,
				allowedParams: ["@copper","@lead","@metaglass","@graphite","@sand","@coal","@titanium","@thorium","@scrap","@silicon","@plastanium","@phase-fabric","@surge-alloy","@spore-pod","@blast-compound","@pyratite","@beryllium","@tungsten","@oxide","@carbide","@fissile-matter","@dormant-cyst"]
			},
			w4: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			}
		},

		payDrop: "payDrop",

		payTake: {
			w1: {
				words: true,
		 	numbers: false,
	 		keywords: false,
	 		color: false,
				allowedWords: false,
				allowedParams: ["@dagger","@mace","@fortress","@scepter","@reign","@nova","@pulsar","@quasar","@vela","@corvus","@crawler","@atrax","@spiroct","@arkyid","@toxopid","@flare","@horizon","@zenith","@antumbra","@eclipse","@mono","@poly","@mega","@quad","@oct","@risso","@minke","@bryde","@sei","@omura","@retusa","@oxynoe","@cyerce","@aegires","@navanax","@alpha","@beta","@gamma","@stell","@locus","@precept","@vanquish","@conquer","@merui","@cleroi","@anthicus","@anthicus-missile","@tecta","@collaris","@elude","@avert","@obviate","@quell","@quell-missile","@disrupt","@disrupt-missile","@renale","@latum","@evoke","@incite","@emanate","@block","@manifold","@assembly-drone","@scathe-missile","@turret-unit-build-tower"]
			}
		},

		payEnter: "payEnter",

		mine: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			}
		},

		flag: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			}
		},

		build: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w4: {
				words: true,
				numbers: false,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w5: {
				words: true,
				numbers: true,
				keywords: "notRecomended",
				color: false,
				allowedWords: false
			},
			w6: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			}
		},

		getBlock: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w4: {
				words: true,
				numbers: false,
				keywords: false,
				color: false,
				allowedWords: false
			},
			w5: {
				words: true,
				numbers: false,
				keywords: false,
				color: false,
				allowedWords: false
			},
			w6: {
				words: true,
				numbers: false,
				keywords: false,
				color: false,
				allowedWords: false
			}
		},

		within: {
			w2: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w3: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w4: {
				words: true,
				numbers: true,
				keywords: true,
				color: false,
				allowedWords: false
			},
			w5: {
				words: true,
				numbers: false,
				keywords: false,
				color: false,
				allowedWords: false
			}
		},

		unbind: "unbind"
}

// allowed word1 and another for ulocate
let objUlocate = {
	ore: {
		w1: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w2: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w3: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedParams: ["@copper", "@lead", "@sand", "@coal", "@titanium", "@scrap", "@thorium", "@beryllium", "@tungsten"]
		},
		w4: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w5: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w6: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w7: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	},

	builing: {
		w1: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["core", "battery", "turret", "reactor", "generator", "storage", "repair", "factory"]
		},
		w2: {
			words: true,
			numbers: true,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w3: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w4: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w5: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w6: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w7: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	},

	damaged: {
		w1: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w2: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w3: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w4: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w5: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w6: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w7: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	},

	spawn: {
		w1: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w2: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w3: {
			words: false,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: ["@null"]
		},
		w4: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w5: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w6: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		},
		w7: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	}
}


/*
color blue for text "rgb(0, 183, 255)"
color purple for commands "rgb(234, 0, 255)"
color green for wariables "rgb(0, 255, 98)"
*/

/*
words = true // can be write a words like variables || false // cant write any words expect allowedWords
number = true // can be write any number || false cant be write any number
keyword = true // can be use a @parameters || false // cant be use a @parameters expect allowedParams ||
 if keywords: "notRecomended" kayword will be output like yellow error
color = rgb() // do this color for word || false // default color
allowedWords = array[] allowed words what can use || false // cant be use any words , checked only if word = false
allowedParams = array[] allowed @parameters || none // not used, checked only if keywords = false
someVariants = true // say to code it need read a allowedWords like object || none
*/

let keyCommands = {
	"#": {
		words: true,
		numbers: true,
		keywords: true,
		color: "rgb(0, 183, 255)",
		allowedWords: false
	},

	read: {
		someVariants: true,
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(0, 183, 255)",
			allowedWords: [reg1, reg2]
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		}
	},

	write: {
		someVariants: true,
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(0, 183, 255)",
			allowedWords: [reg1, reg2]
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		}
	},

	draw: {
		someVariants: true,
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(0, 255, 98)",
			allowedWords: objDraw
		},
		w2: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w4: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false,
		},
		w5: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w6: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w7: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		}
	},

	print: {
		words: true,
		numbers: true,
		keywords: true,
		color: false,
		allowedWords: false
	},

	drawflush: {
		w1: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	},

	printflush: {
		w1: {
			words: true,
			numbers: false,
			keywords: false,
			color: false,
			allowedWords: false
		}
	},

	getlink: {
		w1: {
			words: true,
			numbers: true,
			keywords: false,
			color: false,
			allowedWords: false
		},

		w2: {
			words: true,
			numbers: true,
			keywords: "notRecomended",
			color: false,
			allowedWords: false
		}
	},

	control: {
		someVariants: true,
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(0, 255, 98)",
			allowedWords: objControl
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
		w4: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
		w5: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
		w6: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		}
	},

	radar: {
		someVariants: true,
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w2: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w3: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w4: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: ["distance", "health", "maxHealth", "shield", "armor"]
		},
		w5: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w6: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w7: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		}
	},

	sensor: {
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false,
			allowedParams: ["@copper","@lead","@metaglass","@graphite","@sand","@coal","@titanium","@thorium","@scrap","@silicon","@plastanium","@phase-fabric","@surge-alloy","@spore-pod","@blast-compound","@pyratite","@beryllium","@tungsten","@oxide","@carbide","@fissile-matter","@dormant-cyst","@water","@slag","@oil","@cryofluid","@neoplasm","@arkycite","@gallium","@ozone","@hydrogen","@nitrogen","@cyanogen","@totalItems","@firstItem","@totalLiquds","@totalPower","@itemCapacity","@liquidCapacity","@powerNetStored","@powerNetCapacity","@powerNetIn","@powerNetOut","@ammo","@ammoCapacity","@health","@maxHealth","@heat","@efficiency","@progress","@timescale","@rotation","@x","@y","@shootX","@shootY","@size","@dead","@range","@shooting","@boosting","@mineX","@mineY","@mine","@speed","@team","@type","@flag","@controlled","@controller","@name","@payLoadCount","@payLoadType","@enabled","@config","@color"]
		}
	},

	set: {
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
	},

	op: {
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: ["add", "sub", "mul", "div", "idiv", "mod", "pow", "equal", "notEqual", "land", "lessThan", "lessThanEq", "greaterThan", "greaterThanEq", "strictEqual", "shl", "shr", "or", "and", "xor", "not", "max", "min", "angle", "len", "noise", "abs", "log", "log10", "floor", "ceil", "rand", "sqrt", "sin", "cos", "tan", "acos", "asin", "atan"]
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
		w4: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
	},

	lookup: {
		someVariants: true,
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: ["item", "liquid", "unit", "block"]
		},
		w2: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		}
	},

	packcolor: {
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w4: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		},
		w5: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		}
	},

	wait: {
		w1: {
			words: true,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		}
	},

	stop: "stop",

	end: "end",

	jump: {
		w1: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w2: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: ["equal", "notEqual", "strictEqual", "always", "lessThan", "greaterThan", "lessThanEq", "greaterThanEq"]
		},
		w3: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		},
		w4: {
			words: true,
		 numbers: true,
	 	keywords: true,
	 	color: false,
			allowedWords: false
		}
	},

	ubind: {
		w1: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false,
			allowedParams: ["@dagger","@mace","@fortress","@scepter","@reign","@nova","@pulsar","@quasar","@vela","@corvus","@crawler","@atrax","@spiroct","@arkyid","@toxopid","@flare","@horizon","@zenith","@antumbra","@eclipse","@mono","@poly","@mega","@quad","@oct","@risso","@minke","@bryde","@sei","@omura","@retusa","@oxynoe","@cyerce","@aegires","@navanax","@alpha","@beta","@gamma","@stell","@locus","@precept","@vanquish","@conquer","@merui","@cleroi","@anthicus","@anthicus-missile","@tecta","@collaris","@elude","@avert","@obviate","@quell","@quell-missile","@disrupt","@disrupt-missile","@renale","@latum","@evoke","@incite","@emanate","@block","@manifold","@assembly-drone","@scathe-missile","@turret-unit-build-tower"]
		}
	}, 

	ucontrol: {
		someVariants: true,
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: "rgb(234, 0, 255)",
			allowedWords: objUcontrol
		}
	},

	uradar: {
		w1: {
			words: false,
			numbers: false,
			keywords: false,
			color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w2: {
			words: false,
			numbers: false,
			keywords: false,
			color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w3: {
			words: false,
			numbers: false,
			keywords: false,
			color: "rgb(234, 0, 255)",
			allowedWords: ["any", "ally", "enemy", "player", "boss", "attacker", "ground", "flying"]
		},
		w4: {
			words: false,
			numbers: false,
			keywords: false,
			color: "rgb(234, 0, 255)",
			allowedWords: ["distance", "health", "maxHealth", "shield", "armor"]
		},
		w5: {
			words: false,
		 numbers: true,
	 	keywords: false,
	 	color: false,
			allowedWords: ["0", "1"]
		},
		w6: {
			words: true,
		 numbers: true,
	 	keywords: "notRecomended",
	 	color: false,
			allowedWords: false
		},
		w7: {
			words: true,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: false
		}
	},

	ulocate: {
		w1: {
			words: false,
		 numbers: false,
	 	keywords: false,
	 	color: false,
			allowedWords: objUlocate
		}
	}
};

export {objControl, objDraw, objUcontrol, objUlocate, keyCommands, keywords, reg1, reg2, reg3, reg4}