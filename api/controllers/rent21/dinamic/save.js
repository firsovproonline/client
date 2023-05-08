// import fs from 'fs'
const mysql = require('mysql')
const cianItems = {
  rent: {
    flatRent: {
      Category: 'flatRent',
      RoomType: ['both', 'combined', 'separate'],
      BedsCount: 0,
      FlatRoomsCount: [1, 2, 3, 4, 5, 6, 7, 9],
      IsApartments: false,
      IsPenthouse: false,
      TotalArea: 0,
      FloorNumber: 0,
      AllRoomsArea: '',
      RoomDefinitions: '',
      Room: {
        Area: ''
      },
      LivingArea: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      WindowsViewType: ['street', 'yard', 'yardAndStreet'],
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      Apartment: '',
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    bedRent: {
      Category: 'bedRent',
      RoomsForSaleCount: 0,
      RoomArea: 0,
      BedsCountL: 0,
      RoomsCount: 0,
      TotalArea: 0,
      FloorNumber: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    roomRent: {
      Category: 'roomRent',
      RoomsForSaleCount: 0,
      RoomType: ['both', 'combined', 'separate'],
      RoomArea: 0,
      BedsCount: 0,
      RoomsCount: 0,
      FlatRoomsCount: [1, 2, 3, 4, 5, 6, 7, 9],
      TotalArea: 0,
      FloorNumber: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        TenantsType: ['any', 'family', 'female', 'male'],
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    houseRent: {
      Category: 'houseRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    cottageRent: {
      Category: 'cottageRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    townhouseRent: {
      Category: 'townhouseRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    houseShareRent: {
      Category: 'houseShareRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      ShareAmount: '',
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    garageRent: {
      Category: 'garageRent',
      Garage: {
        Type: ['box', 'garage', 'parkingPlace'],
        GarageType: ['builtIn', 'capital', 'samostroy', 'shell'],
        Material: ['brick', 'metal'],
        Status: ['byProxy', 'cooperative', 'ownership ']
      },
      TotalArea: 0,
      HasLight: false,
      HasElectricity: false,
      HasHeating: false,
      HasWater: false,
      HasExtinguishingSystem: false,
      IsInHiddenBase: false,
      Building: {
        Name: '',
        Parking: {},
        Infrastructure: {
          HasCarWash: false,
          HasCarService: false,
          HasTire: false,
          HasInspectionPit: false,
          HasVideoSurveillance: false,
          HasHourSecurity: false,
          HasAutomaticGates: false,
          HasEntryByPass: false,
          HasBasement: false
        }
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    buildingRent: {
      Category: 'buildingRent',
      ConditionType: 'typical',
      Layout: 'cabinet',
      HasFurniture: false,
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: '',
      TaxNumber: 0,
      IsInHiddenBase: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        HouseLineType: ['first', 'other', 'second'],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler',
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: [
              'cargo',
              'escalator',
              'lift',
              'passenger',
              'telpher',
              'travelator'
            ],
            AdditionalType: '',
            Count: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        Deposit: 0,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    commercialLandRent: {
      Category: 'commercialLandRent',
      Layout: 'cabinet',
      AvailableFrom: '',
      TaxNumber: 0,
      IsInHiddenBase: false,
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'forAgriculturalPurposes',
          'industryTransportCommunications',
          'settlements'
        ],
        PossibleToChangeStatus: false
      },
      PermittedUseType: [
        'agricultural',
        'businessManagement',
        'commonUseArea',
        'highriseBuildings',
        'hotelAmenities',
        'individualHousingConstruction',
        'industry',
        'leisure',
        'lowriseHousing',
        'publicUseOfCapitalConstruction',
        'serviceVehicles',
        'shoppingCenters',
        'warehouses'
      ],
      PossibleToChangePermitedUseType: false,
      HasEncumbrances: false,
      Electricity: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Power: 0
      },
      Gas: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        PressureType: ['high', 'low', 'middle']
      },
      Drainage: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        Type: ['autonomous', 'central']
      },
      Water: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        Type: ['autonomous', 'central', 'pumpingStation', 'waterIntakeFacility', 'waterTower']
      },
      DrivewayType: ['asphalt', 'ground', 'no '],
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    officeRent: {
      Category: 'officeRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      AreaParts: [],
      ConditionType: 'finishing',
      IsOccupied: false,
      Layout: 'cabinet',
      FurniturePresence: 'no',
      AvailableFrom: '',
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        AccessType: 'free',
        Infrastructure: {
          HasCarWash: false,
          HasBuffet: false,
          HasCarService: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasAtm: false,
          HasExhibitionAndWarehouseComplex: false,
          HasPharmacy: false,
          HasBankDepartment: false,
          HasCinema: false,
          HasCafe: false,
          HasMedicalCenter: false,
          HasBeautyShop: false,
          HasStudio: false,
          HasNotaryOffice: false,
          HasPool: false,
          HasClothesStudio: false,
          HasWarehouse: false,
          HasPark: false,
          HasRestaurant: false,
          HasFitnessCentre: false,
          HasSupermarket: false,
          HasMinimarket: false,
          HasShoppingArea: false,
          HasConferenceRoom: false
        }
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    freeAppointmentObjectRent: {
      Category: 'freeAppointmentObjectRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'finishing',
      IsOccupied: false,
      Specialty: {
        Types: {
          String: ''
        },
        AdditionalTypes: {
          String: ''
        }
      },
      Layout: 'cabinet',
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: '',
      HasShopWindows: false,
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler '
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler '
          ]
        }],
        StatusType: ['operational', 'project', 'underConstruction']
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    industryRent: {
      Category: 'industryRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'typical',
      Layout: 'cabinet',
      AvailableFrom: 0,
      FloorMaterialTypeType: [
        'asphalt',
        'concrete',
        'laminate',
        'linoleum',
        'polymeric',
        'reinforcedConcrete',
        'selfLeveling',
        'tile',
        'wood'
      ],
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: '',
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['cargo', 'passenger', 'telpher'],
            AdditionalType: '',
            Count: 0,
            LoadCapacity: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        GatesType: ['atZero', 'dockType', 'onRamp'],
        ColumnGrid: '',
        Infrastructure: {
          HasBuffet: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasOfficeSpace: false
        },

      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      HasSafeCustody: false,
      IsCustoms: false,
      HasTransportServices: false,
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    warehouseRent: {
      Category: 'warehouseRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'typical',
      Layout: 'cabinet',
      AvailableFrom: 0,
      FloorMaterialTypeType: [
        'asphalt',
        'concrete',
        'laminate',
        'linoleum',
        'polymeric',
        'reinforcedConcrete',
        'selfLeveling',
        'tile',
        'wood'
      ],
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: '',
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'b', 'c', 'd'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['cargo', 'passenger', 'telpher'],
            AdditionalType: '',
            Count: 0,
            LoadCapacity: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        GatesType: ['atZero', 'dockType', 'onRamp'],
        ColumnGrid: '',
        Infrastructure: {
          HasBuffet: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasOfficeSpace: false
        },

      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      HasSafeCustody: false,
      IsCustoms: false,
      HasTransportServices: false,
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    shoppingAreaRent: {
      Category: 'shoppingAreaRent',
      PlacementType: ['shoppingMall', 'streetRetail'],
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'finishing',
      Specialty: [{
        Types: {
          String: ''
        },
        AdditionalTypes: {
          String: ''
        }
      }],
      Layout: 'cabinet',
      HasInternet: false,
      HasFurniture: false,
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: 0,
      HasShopWindows: false,
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: [
          'autonomous',
          'autonomousGas',
          'boiler',
          'central',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'other',
          'solidFuelBoiler',
          'stove'
        ],
        CeilingHeight: 0,
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        HouseLineType: [
          'first', 'other', 'second'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['escalator', 'lift', 'travelator'],
            Count: 0,
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        Infrastructure: {
          HasCarWash: false,
          HasBuffet: false,
          HasCarService: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasAtm: false,
          HasFoodCourt: false,
          HasPharmacy: false,
          HasBankDepartment: false,
          HasSlotMachines: false,
          HasCinema: false,
          HasAquapark: false,
          HasBabySitting: false,
          HasRink: false,
          HasCafe: false,
          HasBowling: false,
          HasMedicalCenter: false,
          HasBuffet: false,
          HasBeautyShop: false,
          HasStudio: false,
          HasPool: false,
          HasClothesStudio: false,
          HasWarehouse: false,
          HasRestaurant: false,
          HasFitnessCentre: false,
          HasSupermarket: false,
          HasMinimarket: false,
          HasGameRoom: false
        },
        WorkingDaysType: ['everyday', 'weekdays', 'weekends'],
        Tenants: '',
        OpeningHours: {
          From: '',
          To: '',
          Type: ['roundTheClock', 'specific']
        }
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    }
  },
  sale: {

  }
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function generateUID() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1) {

  const promiseAR = [];

  for (var key in req.body) {
    switch (key) {
      case 'export':
        // console.log('uid',__dirname)
//        fs.writeFileSync(__dirname+'../../../config/saveEXPORT.json', JSON.stringify(req.body.export.value))
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21ob.update(
            {
              exports: req.body.export.value
            },
            {
              where: {
                uid: req.body.export.uid
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              // var query = "INSERT INTO `export` (`UID`,`VAL`,`TITLE`,`PUID`,`TIP`,`STEP`)  VALUES ?";
              const out = []
              for (const [tip, value] of Object.entries(req.body.export.value)) {
                for (const [title, val] of Object.entries(value)) {
                  //console.log(`${tip} ${title}: ${val}`);
                  if(title!=='PHOTO'){
                    out.push([
                      req.body.export.uid,
                      val,
                      title,
                      null,
                      tip,
                      0
                    ])
                  }else{
                    let step = 0
                    val.forEach(item=>{
                      const puid = generateUID()
                      out.push([
                        req.body.export.uid,
                        item.title,
                        'PHOTO',
                        item.uid,
                        tip,
                        step
                      ])
                      step++
                      //console.log(puid, item);

                    })
                  }
                }
              }
              let sql = "delete from export WHERE `UID` in ('" + req.body.export.uid + "') AND `TIP` <> 'linc21'";
              const connection = mysql.createConnection({
                host: db.config.HOST,
                user: db.config.USER,
                password: db.config.PASSWORD,
                database: db.config.DB,
                debug: false
              });
              connection.query(sql, [], function(err, result) {
                sql = "INSERT INTO  `export` (`UID`,`VAL`,`TITLE`,`PUID`,`TIP`,`STEP`) VALUES ?";
                connection.query(sql, [out], function(err, result) {
                  //fs.writeFileSync(__dirname+'../../../config/saveEXPORT.json', JSON.stringify(out))
                  resolve({ 'body': req.body })
                })
              })
            }
          })


          //resolve({ 'body': req.body })
        }))


        break;
      case 'ob21':
        const ob21 = req.body[key]
        if(ob21.owner){
          promiseAR.push(new Promise(function (resolve, reject){
            let category = ''

            if (ob21.fields.OPP === '') {
              ob21.fields.OPP = 'Аренда'
            }
            let cian = null
            if (ob21.fields.OPP === 'Аренда') {
              if (ob21.fields.TIP === 'Офис') {
                category = 'officeRent'
              }
              if (ob21.fields.TIP === 'Помещение свободного назначения') {
                category = 'freeAppointmentObjectRent'
              }
              if (ob21.fields.TIP === 'Здание') {
                category = 'buildingRent'
              }
              if (ob21.fields.TIP === 'Квартира') {
                category = 'flatRent'
              }
              if (ob21.fields.TIP === 'Торговая площадь') {
                category = 'shoppingAreaRent'
              }
              if (ob21.fields.TIP === 'Склад') {
                category = 'warehouseRent'
              }
              if (ob21.fields.TIP === 'Производство') {
                category = 'industryRent'
              }
              if (ob21.fields.TIP === 'Гараж') {
                category = 'garageRent'
              }
              if (ob21.fields.TIP === 'Дом/дача') {
                category = 'houseRent'
              }
              cian = cianItems.rent[category]
            }
            if (ob21.fields.OPP === 'Продажа') {
              if (ob21.fields.TIP === 'Офис') {
                category = 'officeSale'
              }
              if (ob21.fields.TIP === 'Помещение свободного назначения') {
                category = 'freeAppointmentObjectSale'
              }
              if (ob21.fields.TIP === 'Здание') {
                category = 'buildingSale'
              }
              if (ob21.fields.TIP === 'Квартира') {
                category = 'flatSale'
              }
              if (ob21.fields.TIP === 'Торговая площадь') {
                category = 'shoppingAreaSale'
              }
              if (ob21.fields.TIP === 'Склад') {
                category = 'warehouseSale'
              }
              if (ob21.fields.TIP === 'Квартира новостройка') {
                category = 'newBuildingFlatSale'
              }
              if (ob21.fields.TIP === 'Готовый бизнес') {
                category = 'businessSale'
              }
              if (ob21.fields.TIP === 'Производство') {
                category = 'industrySale'
              }
              if (ob21.fields.TIP === 'Гараж') {
                category = 'garageSale'
              }
              if (ob21.fields.TIP === 'Дом/дача') {
                category = 'houseSale'
              }
            }
            db.rent21ob.create({
              uid: ob21.fields.UID,
              build: ob21.build,
              fields: ob21.fields,
              owner: ob21.owner,
              category: category,
              cian: cian,
              exports: ob21.exports
            }).then(() => {
              console.log('добавление итема ob21 в здание')
              resolve({ 'body': req.body })
            })
          }))
        }
        else
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21ob.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              const out = []
              if(1 === 2){
                for (const [title, value] of Object.entries(ob21)) {
                  out.push([
                    null,
                    ob21.UID,
                    'ob21',
                    title,
                    value,
                    'root'
                  ])
                }
                let sql = "delete from fields WHERE `UID` in ('" + ob21.UID + "') AND `TIP` <> 'linc21'";
                const connection = mysql.createConnection({
                  host: db.config.HOST,
                  user: db.config.USER,
                  password: db.config.PASSWORD,
                  database: db.config.DB,
                  debug: false
                });
                connection.query(sql, [], function(err, result) {
                  sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                  connection.query(sql, [out], function(err, result) {
                    fs.writeFileSync(__dirname+'../../../config/saveOB21.json', JSON.stringify(out))
                    resolve({ 'body': req.body })
                  })
                })
              }

            }
          })
        }));
        break
      case 'address':
        const address = req.body[key]
        //console.error(req.body[key])
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21address.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              db.rent21address.create(
                {
                  uid: req.body[key].UID,
                  fields: req.body[key]
                }
              ).then(item=>{
                resolve({ 'error': 405 })
              })
            } else {
              const out = []
              if(1==2){
                for (const [title, value] of Object.entries(address)) {
                  if(title !=='METRO'){
                    out.push([
                      null,
                      address.UID,
                      'adRes21',
                      title,
                      value,
                      'root'
                    ])
                  }else{
                    value.forEach(item=>{
                      const puid = generateUID()
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'METRO',
                        item.NAME,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'GLMETRO',
                        item.GLMETRO,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'UDTIP',
                        item.UDTIP,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'UD',
                        item.UD,
                        puid
                      ])
                    })
                  }
                }
                let sql = "delete from fields WHERE `UID` in ('" + address.UID + "') AND `TIP` <> 'linc21'";
                const connection = mysql.createConnection({
                  host: db.config.HOST,
                  user: db.config.USER,
                  password: db.config.PASSWORD,
                  database: db.config.DB,
                  debug: false
                });
                connection.query(sql, [], function(err, result) {
                  sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                  connection.query(sql, [out], function(err, result) {
                    fs.writeFileSync(__dirname+'../../../config/saveADDRESS.json', JSON.stringify(out))
                    resolve({ 'body': req.body })
                  })
                })
              }
            }
          })
        }));
        break
      case 'building':
        const building = req.body[key]
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21building.update(
            {
              fields: building,
              address: building.address,
              owners: building.owners
            },
            {
              where: {
                uid: building.UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              db.rent21building.create(
                {
                  uid: building.UID,
                  fields: building,
                  address: building.address,
                  owners: building.owners
                }
              ).then(item=>{
                resolve({'body': req.body })
              })
            } else {
              /*
              const out = []
              for (const [title, value] of Object.entries(building)) {
                out.push([
                  null,
                  building.UID,
                  'buid21',
                  title,
                  value,
                  'root'
                ])
              }
              let sql = "delete from fields WHERE `UID` in ('" + building.UID + "') AND `TIP` <> 'linc21'";
              const connection = mysql.createConnection({
                host: db.config.HOST,
                user: db.config.USER,
                password: db.config.PASSWORD,
                database: db.config.DB,
                debug: false
              });
              connection.query(sql, [], function(err, result) {
                sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                connection.query(sql, [out], function(err, result) {
                  fs.writeFileSync(__dirname+'../../../config/saveBuilding.json', JSON.stringify(out))
                  resolve({ 'body': req.body })
                })
              })

               */
            }
          })
        }));
        break
      default:
    }
  }
  Promise.all(promiseAR).then(
    result => {
      res.json({ status: true })
    },
    error => res.json({ status: false })
  )
}else{
  res.json({error : 401})
}
