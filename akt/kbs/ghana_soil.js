AKT.kbs.ghana_soil = 
`last_modified(ghana_soil,date(10,mar,2000)).
sentence(1,soil,formal(att_value(_108360,fertility,high),[_108360 : black_soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([black_soil]),attribute([fertility]),action([]),process([]),link([]),comparison([]),value([high])),attribute).
sentence(2,soil,formal(att_value(_109092,water_holding_capacity,high),[_109092 : black_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([black_soil]),attribute([water_holding_capacity]),action([]),process([]),link([]),comparison([]),value([high])),attribute).
sentence(3,soil,formal(att_value(_109824,fertility,low),[_109824 : loose_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([loose_soil]),attribute([fertility]),action([]),process([]),link([]),comparison([]),value([low])),attribute).
sentence(4,soil,formal(att_value(_110556,fertility,low),[_110556 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil]),attribute([fertility]),action([]),process([]),link([]),comparison([]),value([low])),attribute).
sentence(5,soil,formal(att_value(process(_111292,erosion),amount,high),[_111292 : red_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([red_soil]),attribute([amount]),action([]),process([erosion]),link([]),comparison([]),value([high])),attribute).
sentence(6,soil,formal(att_value(process(_112032,erosion),amount,high),[_112032 : loose_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([loose_soil]),attribute([amount]),action([]),process([erosion]),link([]),comparison([]),value([high])),attribute).
sentence(7,soil,formal(att_value(process(part(_112776,_112778),leaching),rate,low),[_112778 : nutrient,_112776 : red_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([nutrient,red_soil]),attribute([rate]),action([]),process([leaching]),link([]),comparison([]),value([low])),attribute).
sentence(8,soil,formal(att_value(process(part(_113532,_113534),leaching),rate,high),[_113534 : nutrient,_113532 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil,nutrient]),attribute([rate]),action([]),process([leaching]),link([]),comparison([]),value([high])),attribute).
sentence(9,soil,formal(att_value(process(_114284,erosion),amount,high),[_114284 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil]),attribute([amount]),action([]),process([erosion]),link([]),comparison([]),value([high])),attribute).
sentence(10,soil,formal(att_value(_115020,depth,deep),[_115020 : red_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([red_soil]),attribute([depth]),action([]),process([]),link([]),comparison([]),value([deep])),attribute).
sentence(11,soil,formal(att_value(_115752,depth,shallow),[_115752 : loose_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([loose_soil]),attribute([depth]),action([]),process([]),link([]),comparison([]),value([shallow])),attribute).
sentence(12,soil,formal(att_value(_116484,depth,shallow),[_116484 : black_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([black_soil]),attribute([depth]),action([]),process([]),link([]),comparison([]),value([shallow])),attribute).
sentence(13,soil,formal(att_value(_117216,depth,shallow),[_117216 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil]),attribute([depth]),action([]),process([]),link([]),comparison([]),value([shallow])),attribute).
sentence(14,soil,formal(att_value(_117948,organic_content,high),[_117948 : black_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([black_soil]),attribute([organic_content]),action([]),process([]),link([]),comparison([]),value([high])),attribute).
sentence(15,soil,formal(att_value(_118680,steepness,high),[_118680 : bari]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([bari]),attribute([steepness]),action([]),process([]),link([]),comparison([]),value([high])),attribute).
sentence(16,soil,formal(att_value(_119412,steepness,low),[_119412 : khet]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([khet]),attribute([steepness]),action([]),process([]),link([]),comparison([]),value([low])),attribute).
sentence(17,soil,formal(att_value(_120148,production,high) if att_value(_120162,fertility,high) and att_value(_120162,water_holding_capacity,high),[_120148 : crop,_120162 : soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([crop,soil]),attribute([fertility,production,water_holding_capacity]),action([]),process([]),link([]),comparison([]),value([high])),attribute).
sentence(18,soil,formal(att_value(_120922,fertility,high) if att_value(_120936,amount,enough) and att_value(_120946,amount,high),[_120946 : compost,_120936 : rainfall,_120922 : red_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([compost,rainfall,red_soil]),attribute([amount,fertility]),action([]),process([]),link([]),comparison([]),value([enough,high])),attribute).
sentence(19,soil,formal(att_value(_121706,amount,high) if att_value(_121716,season,rainy),[_121706 : rainfall,_121716 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,system]),attribute([amount,season]),action([]),process([]),link([]),comparison([]),value([high,rainy])),attribute).
sentence(20,soil,formal(att_value(_122466,intensity,high) if att_value(_122476,season,rainy),[_122466 : rainfall,_122476 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,system]),attribute([intensity,season]),action([]),process([]),link([]),comparison([]),value([high,rainy])),attribute).
sentence(21,soil,formal(att_value(_123226,frequency,low) if att_value(_123240,season,summer) or att_value(_123240,season,winter),[_123226 : rainfall,_123240 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,system]),attribute([frequency,season]),action([]),process([]),link([]),comparison([]),value([low,summer,winter])),attribute).
sentence(22,soil,formal(att_value(_124002,season,rainy) if att_value(_124002,month,june) or att_value(_124002,month,july) or att_value(_124002,month,august) or att_value(_124002,season,september),[_124002 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([system]),attribute([month,season]),action([]),process([]),link([]),comparison([]),value([august,july,june,rainy,september])),attribute).
sentence(23,soil,formal(att_value(_124800,season,summer) if att_value(_124800,month,march) or att_value(_124800,month,april) or att_value(_124800,season,may),[_124800 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([system]),attribute([month,season]),action([]),process([]),link([]),comparison([]),value([april,march,may,summer])),attribute).
sentence(24,soil,formal(att_value(_125582,season,winter) if att_value(_125582,month,november) or att_value(_125582,month,december) or att_value(_125582,season,january) or att_value(_125582,season,february),[_125582 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([system]),attribute([month,season]),action([]),process([]),link([]),comparison([]),value([december,february,january,november,winter])),attribute).
sentence(25,soil,formal(att_value(_126380,land_holding,decrease) causes2way att_value(action(cultivation,_126396),intensity,increase),[_126396 : crop,_126380 : farmer]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop,farmer]),attribute([intensity,land_holding]),action([cultivation]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(26,soil,formal(att_value(action(cultivation,_127154),intensity,increase) causes2way att_value(process(part(_127172,_127174),extraction),amount,increase),[_127154 : crop,_127174 : nutrient,_127172 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop,nutrient,soil]),attribute([amount,intensity]),action([cultivation]),process([extraction]),link([]),comparison([]),value([increase])),causal).
sentence(27,soil,formal(att_value(_127938,government_subsidy,increase) causes2way att_value(_127938,price,decrease),[_127938 : fertilizer]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([fertilizer]),attribute([government_subsidy,price]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(28,soil,formal(att_value(_128688,access,increase) causes2way att_value(_128698,price,decrease),[_128698 : fertilizer,_128688 : road]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([fertilizer,road]),attribute([access,price]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(29,soil,formal(att_value(_129448,price,decrease) causes2way att_value(_129448,usage,increase),[_129448 : fertilizer]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([fertilizer]),attribute([price,usage]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(30,soil,formal(att_value(_130198,usage,increase) causes2way att_value(_130208,fertility,increase),[_130198 : fertilizer,_130208 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([fertilizer,soil]),attribute([fertility,usage]),action([]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(31,soil,formal(att_value(_130972,amount,increase) causes2way att_value(process(part(_130990,_130992),leaching),amount,increase),[_130992 : nutrient,_130972 : rainfall,_130990 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,rainfall,soil]),attribute([amount]),action([]),process([leaching]),link([]),comparison([]),value([increase])),causal).
sentence(32,soil,formal(att_value(_131752,amount,increase) causes2way att_value(process(_131766,erosion),rate,increase),[_131752 : rainfall,_131766 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,soil]),attribute([amount,rate]),action([]),process([erosion]),link([]),comparison([]),value([increase])),causal).
sentence(33,soil,formal(att_value(_132518,steepness,increase) causes2way att_value(process(_132532,erosion),rate,increase),[_132518 : site,_132532 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([site,soil]),attribute([rate,steepness]),action([]),process([erosion]),link([]),comparison([]),value([increase])),causal).
sentence(34,soil,formal(att_value(process(part(_133292,_133294),extraction),amount,increase) causes2way att_value(part(_133292,_133294),availability,decrease),[_133294 : nutrient,_133292 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([amount,availability]),action([]),process([extraction]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(35,soil,formal(att_value(process(part(_134072,_134074),leaching),amount,increase) causes2way att_value(part(_134072,_134074),availability,decrease),[_134074 : nutrient,_134072 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([amount,availability]),action([]),process([leaching]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(36,soil,formal(att_value(process(_134848,erosion),rate,increase) causes2way att_value(process(part(_134848,_134870),leaching),rate,increase),[_134870 : nutrient,_134848 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([rate]),action([]),process([erosion,leaching]),link([]),comparison([]),value([increase])),causal).
sentence(37,soil,formal(att_value(_135636,fertility,decrease) causes2way att_value(_135646,production,decrease),[_135646 : crop,_135636 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop,soil]),attribute([fertility,production]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(38,soil,formal(att_value(action(mulching,_136422),amount,increase) causes2way att_value(process(_136438,erosion),rate,decrease),[_136438 : soil,_136422 : stubble]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([soil,stubble]),attribute([amount,rate]),action([mulching]),process([erosion]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(39,soil,formal(action(planting,_137218) causes1way att_value(process(_137228,erosion),rate,decrease),[_137228 : soil,_137218 : strip]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([soil,strip]),attribute([rate]),action([planting]),process([erosion]),link([]),comparison([]),value([decrease])),causal).
sentence(40,soil,formal(action(planting,_138002) causes1way att_value(process(_138012,erosion),rate,decrease),[_138002 : cover_crop,_138012 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([cover_crop,soil]),attribute([rate]),action([planting]),process([erosion]),link([]),comparison([]),value([decrease])),causal).
sentence(41,soil,formal(att_value(_138764,availability,increase) causes2way att_value(action(migration,_138780),scale,increase),[_138780 : farmer,_138764 : off_farm_job]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([farmer,off_farm_job]),attribute([availability,scale]),action([migration]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(42,soil,formal(att_value(action(migration,_139536),scale,increase) causes2way att_value(_139546,pressure_on_forest,decrease),[_139536 : farmer,_139546 : population]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([farmer,population]),attribute([pressure_on_forest,scale]),action([migration]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(43,soil,formal(att_value(_140298,pressure_on_forest,decrease) causes2way att_value(process(_140312,degradation),intensity,decrease),[_140312 : forest,_140298 : population]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([forest,population]),attribute([intensity,pressure_on_forest]),action([]),process([degradation]),link([]),comparison([]),value([decrease])),causal).
sentence(44,soil,formal(att_value(process(_141068,degradation),intensity,decrease) causes2way att_value(_141080,availability,increase),[_141068 : forest,_141080 : forest_fodder]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([forest,forest_fodder]),attribute([availability,intensity]),action([]),process([degradation]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(45,soil,formal(att_value(_141832,availability,increase) causes2way att_value(_141842,amount,increase),[_141842 : animal_fodder,_141832 : forest_fodder]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal_fodder,forest_fodder]),attribute([amount,availability]),action([]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(46,soil,formal(att_value(_142590,availability,increase) causes2way att_value(_142600,amount,increase),[_142600 : animal_fodder,_142590 : private_fodder]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal_fodder,private_fodder]),attribute([amount,availability]),action([]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(47,soil,formal(att_value(_143348,amount,increase) causes2way att_value(_143358,number,increase),[_143358 : animal,_143348 : animal_fodder]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal,animal_fodder]),attribute([amount,number]),action([]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(48,soil,formal(att_value(action(migration,_144112),scale,increase) causes2way att_value(_144122,availability,decrease),[_144122 : farm_labour,_144112 : farmer]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([farm_labour,farmer]),attribute([availability,scale]),action([migration]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(49,soil,formal(att_value(_144874,availability,decrease) causes2way att_value(_144884,number,decrease),[_144884 : animal,_144874 : farm_labour]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal,farm_labour]),attribute([availability,number]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(50,soil,formal(att_value(_145632,number,decrease) causes2way att_value(_145642,availability,decrease),[_145632 : animal,_145642 : animal_manure]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal,animal_manure]),attribute([availability,number]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(51,soil,formal(att_value(_146390,availability,decrease) causes2way att_value(_146400,fertility,decrease),[_146390 : animal_manure,_146400 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal_manure,soil]),attribute([availability,fertility]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(52,soil,formal(att_value(_147148,amount,decrease) causes2way att_value(_147158,amount,decrease),[_147148 : animal_fodder,_147158 : crop_residue]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([animal_fodder,crop_residue]),attribute([amount]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(53,soil,formal(att_value(_147904,scarcity,increase) causes2way att_value(_147914,amount,decrease),[_147914 : crop_residue,_147904 : firewood]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop_residue,firewood]),attribute([amount,scarcity]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(54,soil,formal(att_value(_148664,amount,increase) causes2way att_value(action(mulching,_148680),amount,increase),[_148664 : crop_residue,_148680 : stubble]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop_residue,stubble]),attribute([amount]),action([mulching]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(55,soil,formal(att_value(_149428,depth,decrease) causes2way att_value(process(_149428,erosion),rate,increase),[_149428 : soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([soil]),attribute([depth,rate]),action([]),process([erosion]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(56,soil,formal(att_value(process(_150190,erosion),amount,increase) causes2way att_value(_150202,production,decrease),[_150202 : crop,_150190 : soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([crop,soil]),attribute([amount,production]),action([]),process([erosion]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(57,soil,formal(att_value(_150954,season,winter) causes1way att_value(_150964,amount,low),[_150964 : rainfall,_150954 : system]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,system]),attribute([amount,season]),action([]),process([]),link([]),comparison([]),value([low,winter])),causal).
sentence(58,soil,formal(att_value(_151714,amount,decrease) causes2way att_value(_151724,moisture_stress,increase),[_151714 : rainfall,_151724 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall,soil]),attribute([amount,moisture_stress]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(59,soil,formal(att_value(_152474,availability,decrease) causes2way att_value(_152484,production,decrease),[_152484 : crop,_152474 : nutrient]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([crop,nutrient]),attribute([availability,production]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(60,soil,formal(att_value(_153232,moisture_stress,increase) causes2way att_value(_153242,availability,decrease),[_153242 : nutrient,_153232 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([availability,moisture_stress]),action([]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(61,soil,formal(att_value(part(_153996,_153998),availability,decrease) causes2way att_value(_153996,fertility,decrease),[_153998 : nutrient,_153996 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([availability,fertility]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(62,soil,formal(att_value(_154756,distance_from_home,increase) causes2way att_value(action(application,_154772),amount,decrease),[_154772 : compost_in_field,_154756 : field]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([compost_in_field,field]),attribute([amount,distance_from_home]),action([application]),process([]),link([]),comparison([]),value([decrease,increase])),causal).
sentence(63,soil,formal(att_value(_155524,steepness,increase) causes2way att_value(process(_155538,erosion),rate,increase),[_155524 : field,_155538 : soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([field,soil]),attribute([rate,steepness]),action([]),process([erosion]),link([]),comparison([]),value([increase])),causal).
sentence(64,soil,formal(action(irrigation,_156292) causes1way att_value(part(_156302,_156304),availability,increase),[_156292 : khet,_156304 : nutrient,_156302 : soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([khet,nutrient,soil]),attribute([availability]),action([irrigation]),process([]),link([]),comparison([]),value([increase])),causal).
sentence(65,soil,formal(att_value(_157062,frequency,decrease) causes2way att_value(_157062,amount,decrease),[_157062 : rainfall]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([rainfall]),attribute([amount,frequency]),action([]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(66,soil,formal(att_value(process(part(_157818,_157820),leaching),rate,increase) causes2way att_value(process(part(_157818,_157820),leaching),amount,increase),[_157820 : nutrient,_157818 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([nutrient,soil]),attribute([amount,rate]),action([]),process([leaching]),link([]),comparison([]),value([increase])),causal).
sentence(67,soil,formal(att_value(action(application,_158600),amount,decrease) causes2way att_value(_158610,fertility,decrease),[_158600 : compost_in_field,_158610 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([compost_in_field,soil]),attribute([amount,fertility]),action([application]),process([]),link([]),comparison([]),value([decrease])),causal).
sentence(68,soil,formal(att_value(process(_159364,erosion),rate,increase) causes2way att_value(process(_159364,erosion),amount,increase),[_159364 : soil]),source(soil,source([('Gurung',1997,a)])),formal_terms(object([soil]),attribute([amount,rate]),action([]),process([erosion]),link([]),comparison([]),value([increase])),causal).
sentence(69,soil,formal(action(cultivation,_160128) causes1way att_value(_160134,production,increase) if att_value(_160144,amount,high),[_160144 : compost,_160134 : crop,_160128 : loose_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([compost,crop,loose_soil]),attribute([amount,production]),action([cultivation]),process([]),link([]),comparison([]),value([high,increase])),causal).
sentence(70,soil,formal(action(cultivation,_160912) causes1way att_value(_160918,production,decrease) if att_value(_160928,amount,very_high),[_160918 : crop,_160912 : loose_soil,_160928 : rainfall]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([crop,loose_soil,rainfall]),attribute([amount,production]),action([cultivation]),process([]),link([]),comparison([]),value([decrease,very_high])),causal).
sentence(71,soil,formal(action(cultivation,_161696) causes1way att_value(_161702,production,increase) if att_value(_161712,amount,high),[_161712 : compost,_161702 : crop,_161696 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil,compost,crop]),attribute([amount,production]),action([cultivation]),process([]),link([]),comparison([]),value([high,increase])),causal).
sentence(72,soil,formal(action(cultivation,_162480) causes1way att_value(_162486,production,decrease) if att_value(_162496,amount,very_high),[_162486 : crop,_162496 : rainfall,_162480 : sandy_soil]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([sandy_soil,crop,rainfall]),attribute([amount,production]),action([cultivation]),process([]),link([]),comparison([]),value([decrease,very_high])),causal).
sentence(73,soil,formal(comparison(distance_from_home,_163256,less_than,_163260),[_163256 : bari,_163260 : khet]),source(soil,source([('Farmers',1997,a)])),formal_terms(object([bari,khet]),attribute([distance_from_home]),action([]),process([]),link([]),comparison([less_than]),value([])),comparison).
formal_term(soil,access,attribute,'',[],used).
formal_term(soil,amount,attribute,'',[],used).
formal_term(soil,animal,object,'',[],used).
formal_term(soil,animal_fodder,object,'',[],used).
formal_term(soil,animal_manure,object,'',[],used).
formal_term(soil,application,action,'',[],used).
formal_term(soil,april,value,'',[],used).
formal_term(soil,august,value,'',[],used).
formal_term(soil,availability,attribute,'',[],used).
formal_term(soil,bari,object,'non-irrigated or rain-fed field',[bari_land],used).
formal_term(soil,black_soil,object,'dark soil rich in organic content',[kalo_maato],used).
formal_term(soil,compost,object,'',[],used).
formal_term(soil,compost_in_field,object,'',[],used).
formal_term(soil,cover_crop,object,'',[],used).
formal_term(soil,crop,object,'',[],used).
formal_term(soil,crop_residue,object,'',[],used).
formal_term(soil,cultivation,action,'',[],used).
formal_term(soil,december,value,'',[],used).
formal_term(soil,decrease,value,'',[],used).
formal_term(soil,deep,value,'',[],used).
formal_term(soil,degradation,process,'',[],used).
formal_term(soil,depth,attribute,'',[],used).
formal_term(soil,distance_from_home,attribute,'',[],used).
formal_term(soil,enough,value,'',[],used).
formal_term(soil,erosion,process,'',[],used).
formal_term(soil,extraction,process,'',[],used).
formal_term(soil,farm_labour,object,'',[],used).
formal_term(soil,farmer,object,'',[],used).
formal_term(soil,february,value,'',[],used).
formal_term(soil,fertility,attribute,'',[],used).
formal_term(soil,fertilizer,object,'',[],used).
formal_term(soil,field,object,'cultivated land',[farm],used).
formal_term(soil,firewood,object,'',[],used).
formal_term(soil,forest,object,'',[],used).
formal_term(soil,forest_fodder,object,'',[],used).
formal_term(soil,frequency,attribute,'',[],used).
formal_term(soil,government_subsidy,attribute,'',[],used).
formal_term(soil,high,value,'',[],used).
formal_term(soil,increase,value,'',[],used).
formal_term(soil,intensity,attribute,'',[],used).
formal_term(soil,irrigation,action,'',[],used).
formal_term(soil,january,value,'',[],used).
formal_term(soil,july,value,'',[],used).
formal_term(soil,june,value,'',[],used).
formal_term(soil,khet,object,'irrigated field usually at lower altitudes for growing paddy',[khet_land],used).
formal_term(soil,land_holding,attribute,'',[],used).
formal_term(soil,leaching,process,'',[],used).
formal_term(soil,less_than,comparison,'',[],used).
formal_term(soil,loose_soil,object,'light soil',[phusro_maato],used).
formal_term(soil,low,value,'',[],used).
formal_term(soil,march,value,'',[],used).
formal_term(soil,may,value,'',[],used).
formal_term(soil,migration,action,'',[],used).
formal_term(soil,moisture_stress,attribute,'',[],used).
formal_term(soil,month,attribute,'',[],used).
formal_term(soil,mulching,action,'',[],used).
formal_term(soil,november,value,'',[],used).
formal_term(soil,number,attribute,'',[],used).
formal_term(soil,nutrient,object,'',[],used).
formal_term(soil,off_farm_job,object,'',[],used).
formal_term(soil,organic_content,attribute,'',[],used).
formal_term(soil,planting,action,'',[],used).
formal_term(soil,population,object,'',[],used).
formal_term(soil,pressure_on_forest,attribute,'',[],used).
formal_term(soil,price,attribute,'',[],used).
formal_term(soil,private_fodder,object,'',[],used).
formal_term(soil,production,attribute,'',[],used).
formal_term(soil,rainfall,object,'',[],used).
formal_term(soil,rainy,value,'',[],used).
formal_term(soil,rate,attribute,'',[],used).
formal_term(soil,red_soil,object,'',[rato_maato],used).
formal_term(soil,road,object,'',[],used).
formal_term(soil,sandy_soil,object,'',[balaute_maato],used).
formal_term(soil,scale,attribute,'',[],used).
formal_term(soil,scarcity,attribute,'',[],used).
formal_term(soil,season,attribute,'',[],used).
formal_term(soil,september,value,'',[],used).
formal_term(soil,shallow,value,'',[],used).
formal_term(soil,site,object,'',[],used).
formal_term(soil,soil,object,'',[],used).
formal_term(soil,steepness,attribute,'',[],used).
formal_term(soil,strip,object,'',[],used).
formal_term(soil,stubble,object,'',[],used).
formal_term(soil,summer,value,'',[],used).
formal_term(soil,system,object,'',[],used).
formal_term(soil,usage,attribute,'',[],used).
formal_term(soil,very_high,value,'',[],used).
formal_term(soil,water_holding_capacity,attribute,'',[],used).
formal_term(soil,winter,value,'',[],used).
subobject(soil,soil,top,soil).
subobject(soil,soil,soil,loose_soil).
subobject(soil,soil,soil,black_soil).
subobject(soil,soil,soil,red_soil).
subobject(soil,soil,soil,sandy_soil).
subobject(soil,field,top,field).
subobject(soil,field,field,bari).
subobject(soil,field,field,khet).
subtopic(soil,'Soils',top,'Soils').
subtopic(soil,'Soils','Soils','SoilColour').
subtopic(soil,'Soils','Soils','SoilTexture').
subtopic(soil,'Soils','SoilTexture',textureErosion).
subtopic(soil,'Soils','SoilColour',colourErosion).
topic(soil,'Farmers','','''Farmers 1997a''',object).
topic(soil,'Gurung','','''Gurung 1997a''',object).
topic(soil,'Crops','','crop or cover_crop or crop_residue',object).
topic(soil,'SoilTexture','','loose_soil or sandy_soil',object).
topic(soil,'SoilColour','','black_soil or red_soil',object).
topic(soil,'Soils','','soil or black_soil or loose_soil or red_soil or sandy_soil',object).
topic(soil,textureErosion,'','(loose_soil or sandy_soil) and erosion',object).
topic(soil,colourErosion,'','(black_soil or red_soil)  and erosion',object).
source_details(soil,source('Gurung',1997,a),interview,'L'('Joshi'),'G'('B','Gurung'),gender('G'('B','Gurung'),'M'),date(25,jun,1997)).
source_details(soil,source('Farmers',1997,a),interview,'G'('B','Gurung'),'Farmers',gender('Farmers','M'),date(9,jul,1997)).
diagram_window_list(soil,[]).
a(A):- sentence(A,_,_,_,_,_).`;
