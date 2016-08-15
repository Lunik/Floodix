'use strict'

var pokemons = {
  en: [
     'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran♀', 'nidorina', 'nidoqueen', 'nidoran♂', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mrmime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew', 'chikorita', 'bayleef', 'meganium', 'cyndaquil', 'quilava', 'typhlosion', 'totodile', 'croconaw', 'feraligatr', 'sentret', 'furret', 'hoothoot', 'noctowl', 'ledyba', 'ledian', 'spinarak', 'ariados', 'crobat', 'chinchou', 'lanturn', 'pichu', 'cleffa', 'igglybuff', 'togepi', 'togetic', 'natu', 'xatu', 'mareep', 'flaaffy', 'ampharos', 'bellossom', 'marill', 'azumarill', 'sudowoodo', 'politoed', 'hoppip', 'skiploom', 'jumpluff', 'aipom', 'sunkern', 'sunflora', 'yanma', 'wooper', 'quagsire', 'espeon', 'umbreon', 'murkrow', 'slowking', 'misdreavus', 'unown', 'wobbuffet', 'girafarig', 'pineco', 'forretress', 'dunsparce', 'gligar', 'steelix', 'snubbull', 'granbull', 'qwilfish', 'scizor', 'shuckle', 'heracross', 'sneasel', 'teddiursa', 'ursaring', 'slugma', 'magcargo', 'swinub', 'piloswine', 'corsola', 'remoraid', 'octillery', 'delibird', 'mantine', 'skarmory', 'houndour', 'houndoom', 'kingdra', 'phanpy', 'donphan', 'porygon2', 'stantler', 'smeargle', 'tyrogue', 'hitmontop', 'smoochum', 'elekid', 'magby', 'miltank', 'blissey', 'raikou', 'entei', 'suicune', 'larvitar', 'pupitar', 'tyranitar', 'lugia', 'ho-oh', 'celebi', 'treecko', 'grovyle', 'sceptile', 'torchic', 'combusken', 'blaziken', 'mudkip', 'marshtomp', 'swampert', 'poochyena', 'mightyena', 'zigzagoon', 'linoone', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'lotad', 'lombre', 'ludicolo', 'seedot', 'nuzleaf', 'shiftry', 'taillow', 'swellow', 'wingull', 'pelipper', 'ralts', 'kirlia', 'gardevoir', 'surskit', 'masquerain', 'shroomish', 'breloom', 'slakoth', 'vigoroth', 'slaking', 'nincada', 'ninjask', 'shedinja', 'whismur', 'loudred', 'exploud', 'makuhita', 'hariyama', 'azurill', 'nosepass', 'skitty', 'delcatty', 'sableye', 'mawile', 'aron', 'lairon', 'aggron', 'meditite', 'medicham', 'electrike', 'manectric', 'plusle', 'minun', 'volbeat', 'illumise', 'roselia', 'gulpin', 'swalot', 'carvanha', 'sharpedo', 'wailmer', 'wailord', 'numel', 'camerupt', 'torkoal', 'spoink', 'grumpig', 'spinda', 'trapinch', 'vibrava', 'flygon', 'cacnea', 'cacturne', 'swablu', 'altaria', 'zangoose', 'seviper', 'lunatone', 'solrock', 'barboach', 'whiscash', 'corphish', 'crawdaunt', 'baltoy', 'claydol', 'lileep', 'cradily', 'anorith', 'armaldo', 'feebas', 'milotic', 'castform', 'kecleon', 'shuppet', 'banette', 'duskull', 'dusclops', 'tropius', 'chimecho', 'absol', 'wynaut', 'snorunt', 'glalie', 'spheal', 'sealeo', 'walrein', 'clamperl', 'huntail', 'gorebyss', 'relicanth', 'luvdisc', 'bagon', 'shelgon', 'salamence', 'beldum', 'metang', 'metagross', 'regirock', 'regice', 'registeel', 'latias', 'latios', 'kyogre', 'groudon', 'rayquaza', 'jirachi', 'deoxys', 'turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly', 'staravia', 'staraptor', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'budew', 'roserade', 'cranidos', 'rampardos', 'shieldon', 'bastiodon', 'burmy', 'wormadam', 'mothim', 'combee', 'vespiquen', 'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'ambipom', 'drifloon', 'drifblim', 'buneary', 'lopunny', 'mismagius', 'honchkrow', 'glameow', 'purugly', 'chingling', 'stunky', 'skuntank', 'bronzor', 'bronzong', 'bonsly', 'mimejr', 'happiny', 'chatot', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax', 'riolu', 'lucario', 'hippopotas', 'hippowdon', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'finneon', 'lumineon', 'mantyke', 'snover', 'abomasnow', 'weavile', 'magnezone', 'lickilicky', 'rhyperior', 'tangrowth', 'electivire', 'magmortar', 'togekiss', 'yanmega', 'leafeon', 'glaceon', 'gliscor', 'mamoswine', 'porygon-z', 'gallade', 'probopass', 'dusknoir', 'froslass', 'rotom', 'uxie', 'mesprit', 'azelf', 'dialga', 'palkia', 'heatran', 'regigigas', 'giratina', 'cresselia', 'phione', 'manaphy', 'darkrai', 'shaymin', 'arceus', 'victini', 'snivy', 'servine', 'serperior', 'tepig', 'pignite', 'emboar', 'oshawott', 'dewott', 'samurott', 'patrat', 'watchog', 'lillipup', 'herdier', 'stoutland', 'purrloin', 'liepard', 'pansage', 'simisage', 'pansear', 'simisear', 'panpour', 'simipour', 'munna', 'musharna', 'pidove', 'tranquill', 'unfezant', 'blitzle', 'zebstrika', 'roggenrola', 'boldore', 'gigalith', 'woobat', 'swoobat', 'drilbur', 'excadrill', 'audino', 'timburr', 'gurdurr', 'conkeldurr', 'tympole', 'palpitoad', 'seismitoad', 'throh', 'sawk', 'sewaddle', 'swadloon', 'leavanny', 'venipede', 'whirlipede', 'scolipede', 'cottonee', 'whimsicott', 'petilil', 'lilligant', 'basculin', 'sandile', 'krokorok', 'krookodile', 'darumaka', 'darmanitan', 'maractus', 'dwebble', 'crustle', 'scraggy', 'scrafty', 'sigilyph', 'yamask', 'cofagrigus', 'tirtouga', 'carracosta', 'archen', 'archeops', 'trubbish', 'garbodor', 'zorua', 'zoroark', 'minccino', 'cinccino', 'gothita', 'gothorita', 'gothitelle', 'solosis', 'duosion', 'reuniclus', 'ducklett', 'swanna', 'vanillite', 'vanillish', 'vanilluxe', 'deerling', 'sawsbuck', 'emolga', 'karrablast', 'escavalier', 'foongus', 'amoonguss', 'frillish', 'jellicent', 'alomomola', 'joltik', 'galvantula', 'ferroseed', 'ferrothorn', 'klink', 'klang', 'klinklang', 'tynamo', 'eelektrik', 'eelektross', 'elgyem', 'beheeyem', 'litwick', 'lampent', 'chandelure', 'axew', 'fraxure', 'haxorus', 'cubchoo', 'beartic', 'cryogonal', 'shelmet', 'accelgor', 'stunfisk', 'mienfoo', 'mienshao', 'druddigon', 'golett', 'golurk', 'pawniard', 'bisharp', 'bouffalant', 'rufflet', 'braviary', 'vullaby', 'mandibuzz', 'heatmor', 'durant', 'deino', 'zweilous', 'hydreigon', 'larvesta', 'volcarona', 'cobalion', 'terrakion', 'virizion', 'tornadus', 'thundurus', 'reshiram', 'zekrom', 'landorus', 'kyurem', 'keldeo', 'meloetta', 'genesect', 'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja', 'bunnelby', 'diggersby', 'fletchling', 'fletchinder', 'talonflame', 'scatterbug', 'spewpa', 'vivillon', 'litleo', 'pyroar', 'flabebe', 'floette', 'florges', 'skiddo', 'gogoat', 'pancham', 'pangoro', 'furfrou', 'espurr', 'meowstic', 'honedge', 'doublade', 'aegislash', 'spritzee', 'aromatisse', 'swirlix', 'slurpuff', 'inkay', 'malamar', 'binacle', 'barbaracle', 'skrelp', 'dragalge', 'clauncher', 'clawitzer', 'helioptile', 'heliolisk', 'tyrunt', 'tyrantrum', 'amaura', 'aurorus', 'sylveon', 'hawlucha', 'dedenne', 'carbink', 'goomy', 'sliggoo', 'goodra', 'klefki', 'phantump', 'trevenant', 'pumpkaboo', 'gourgeist', 'bergmite', 'avalugg', 'noibat', 'noivern', 'xerneas', 'yveltal', 'zygarde', 'diancie', 'hoopa', 'volcanion'
   ],
  fr: [
    'bulbizarre', 'herbizarre', 'florizarre', 'salameche', 'reptincel', 'dracaufeu', 'carapuce', 'carabaffe', 'tortank', 'chenipan', 'chrysacier', 'papilusion', 'aspicot', 'coconfort', 'dardargnan', 'roucool', 'roucoups', 'roucarnage', 'rattata', 'rattatac', 'piafabec', 'rapasdepic', 'abo', 'arbok', 'pikachu', 'raichu', 'sabelette', 'sablaireau', 'nidoran♀', 'nidorina', 'nidoqueen', 'nidoran♂', 'nidorino', 'nidoking', 'melofee', 'melodelfe', 'goupix', 'feunard', 'rondoudou', 'grodoudou', 'nosferapti', 'nosferalto', 'mystherbe', 'ortide', 'rafflesia', 'paras', 'parasect', 'mimitoss', 'aeromite', 'taupiqueur', 'triopikeur', 'miaouss', 'persian', 'psykokwak', 'akwakwak', 'ferosinge', 'colossinge', 'caninos', 'arcanin', 'ptitard', 'tetarte', 'tartard', 'abra', 'kadabra', 'alakazam', 'machoc', 'machopeur', 'mackogneur', 'chetiflor', 'boustiflor', 'empiflor', 'tentacool', 'tentacruel', 'racaillou', 'gravalanch', 'grolem', 'ponyta', 'galopa', 'ramoloss', 'flagadoss', 'magneti', 'magneton', 'canarticho', 'doduo', 'dodrio', 'otaria', 'lamantine', 'tadmorv', 'grotadmorv', 'kokiyas', 'crustabri', 'fantominus', 'spectrum', 'ectoplasma', 'onix', 'soporifik', 'hypnomade', 'krabby', 'krabboss', 'voltorbe', 'electrode', 'noeunoeuf', 'noadkoko', 'osselait', 'ossatueur', 'kicklee', 'tygnon', 'excelangue', 'smogo', 'smogogo', 'rhinocorne', 'rhinoferos', 'leveinard', 'saquedeneu', 'kangourex', 'hypotrempe', 'hypocean', 'poissirene', 'poissoroy', 'stari', 'staross', 'mmime', 'insecateur', 'lippoutou', 'elektek', 'magmar', 'scarabrute', 'tauros', 'magicarpe', 'leviator', 'lokhlass', 'metamorph', 'evoli', 'aquali', 'voltali', 'pyroli', 'porygon', 'amonita', 'amonistar', 'kabuto', 'kabutops', 'ptera', 'ronflex', 'artikodin', 'electhor', 'sulfura', 'minidraco', 'draco', 'dracolosse', 'mewtwo', 'mew', 'germignon', 'macronium', 'meganium', 'hericendre', 'feurisson', 'typhlosion', 'kaiminus', 'crocrodil', 'aligatueur', 'fouinette', 'fouinar', 'hoothoot', 'noarfang', 'coxy', 'coxyclaque', 'mimigal', 'migalos', 'nostenfer', 'loupio', 'lanturn', 'pichu', 'melo', 'toudoudou', 'togepi', 'togetic', 'natu', 'xatu', 'wattouat', 'lainergie', 'pharamp', 'joliflor', 'marill', 'azumarill', 'simularbre', 'tarpaud', 'granivol', 'floravol', 'cotovol', 'capumain', 'tournegrin', 'heliatronc', 'yanma', 'axoloto', 'maraiste', 'mentali', 'noctali', 'cornebre', 'roigada', 'feuforeve', 'zarbi', 'qulbutoke', 'girafarig', 'pomdepic', 'foretress', 'insolourdo', 'scorplane', 'steelix', 'snubbull', 'granbull', 'qwilfish', 'cizayox', 'caratroc', 'scarhino', 'farfuret', 'teddiursa', 'ursaring', 'limagma', 'volcaropod', 'marcacrin', 'cochignon', 'corayon', 'remoraid', 'octillery', 'cadoizo', 'demanta', 'airmure', 'malosse', 'demolosse', 'hyporoi', 'phanpy', 'donphan', 'porygon2', 'cerfrousse', 'queulorior', 'debugant', 'kapoera', 'lippouti', 'elekid', 'magby', 'ecremeuh', 'leuphorie', 'raikou', 'entei', 'suicune', 'embrylex', 'ymphect', 'tyranocif', 'lugia', 'ho-oh', 'celebi', 'arcko', 'massko', 'jungko', 'poussifeu', 'galifeu', 'brasegali', 'gobou', 'flobio', 'laggron', 'medhyena', 'grahyena', 'zigzaton', 'lineon', 'chenipotte', 'armulys', 'charmillon', 'blindalys', 'papinox', 'nenupiot', 'lombre', 'ludicolo', 'grainipiot', 'pifeuil', 'tengalice', 'nirondelle', 'heledelle', 'goelise', 'bekipan', 'tarsal', 'kirlia', 'gardevoir', 'arakdo', 'maskadra', 'balignon', 'chapignon', 'parecool', 'vigoroth', 'monaflemit', 'ningale', 'ninjask', 'munja', 'chuchmur', 'ramboum', 'brouhabam', 'makuhita', 'hariyama', 'azurill', 'tarinor', 'skitty', 'delcatty', 'tenefix', 'mysdibule', 'galekid', 'galegon', 'galeking', 'meditikka', 'charmina', 'dynavolt', 'elecsprint', 'posipi', 'negapi', 'muciole', 'lumivole', 'roselia', 'gloupti', 'avaltout', 'carvanha', 'sharpedo', 'wailmer', 'wailord', 'chamallot', 'camerupt', 'chartor', 'spoink', 'groret', 'spinda', 'kraknoix', 'vibraninf', 'libegon', 'cacnea', 'cacturne', 'tylton', 'altaria', 'mangriff', 'seviper', 'seleroc', 'solaroc', 'barloche', 'barbicha', 'ecrapince', 'colhomard', 'balbuto', 'kaorine', 'lilia', 'vacilys', 'anorith', 'armaldo', 'barpau', 'milobellus', 'morpheo', 'kecleon', 'polichombr', 'branette', 'skelenox', 'teraclope', 'tropius', 'eoko', 'absol', 'okeoke', 'stalgamin', 'oniglali', 'obalie', 'phogleur', 'kaimorse', 'coquiperl', 'serpang', 'rosabyss', 'relicanth', 'lovdisc', 'draby', 'drackhaus', 'drattak', 'terhal', 'metang', 'metalosse', 'regirock', 'regice', 'registeel', 'latias', 'latios', 'kyogre', 'groudon', 'rayquaza', 'jirachi', 'deoxys', 'tortipouss', 'boskara', 'torterra', 'ouisticram', 'chimpenfeu', 'simiabraz', 'tiplouf', 'prinplouf', 'pingoleon', 'etourmi', 'etourvol', 'etouraptor', 'keunotor', 'castorno', 'crikzik', 'melokrik', 'lixy', 'luxio', 'luxray', 'rozbouton', 'roserade', 'kranidos', 'charkos', 'dinoclier', 'bastiodon', 'cheniti', 'cheniselle', 'papilord', 'apitrini', 'apireine', 'pachirisu', 'mustebouee', 'musteflott', 'ceribou', 'ceriflor', 'sancoki', 'tritosor', 'capidextre', 'baudrive', 'grodrive', 'laporeille', 'lockpin', 'magireve', 'corboss', 'chaglam', 'chaffreux', 'korillon', 'moufouette', 'moufflair', 'archeomire', 'archeodong', 'manzai', 'mimejr', 'ptiravi', 'pijako', 'spiritomb', 'griknot', 'carmache', 'carchacrok', 'goinfrex', 'riolu', 'lucario', 'hippopotas', 'hippodocus', 'rapion', 'drascore', 'cradopaud', 'coatox', 'vortente', 'ecayon', 'lumineon', 'babimanta', 'blizzi', 'blizzaroi', 'dimoret', 'magnezone', 'coudlangue', 'rhinastoc', 'bouldeneu', 'elekable', 'maganon', 'togekiss', 'yanmega', 'phyllali', 'givrali', 'scorvol', 'mammochon', 'porygon-z', 'gallame', 'tarinorme', 'noctunoir', 'momartik', 'motisma', 'crehelf', 'crefollet', 'crefadet', 'dialga', 'palkia', 'heatran', 'regigigas', 'giratina', 'cresselia', 'phione', 'manaphy', 'darkrai', 'shaymin', 'arceus', 'victini', 'vipelierre', 'lianaja', 'majaspic', 'gruikui', 'grotichon', 'roitiflam', 'moustillon', 'mateloutre', 'clamiral', 'ratentif', 'miradar', 'ponchiot', 'ponchien', 'mastouffe', 'chacripan', 'leopardus', 'feuillajou', 'feuiloutan', 'flamajou', 'flamoutan', 'flotajou', 'flotoutan', 'munna', 'mushana', 'poichigeon', 'colombeau', 'deflaisan', 'zebribon', 'zeblitz', 'nodulithe', 'geolithe', 'gigalithe', 'chovsourir', 'rhinolove', 'rototaupe', 'minotaupe', 'nanmeouie', 'charpenti', 'ouvrifier', 'betochef', 'tritonde', 'batracne', 'crapustule', 'judokrak', 'karaclee', 'larveyette', 'couverdure', 'manternel', 'venipatte', 'scobolide', 'brutapode', 'doudouvet', 'farfaduvet', 'chlorobule', 'fragilady', 'bargantua', 'mascaiman', 'escroco', 'crocorible', 'darumarond', 'darumacho', 'maracachi', 'crabicoque', 'crabaraque', 'baggiguane', 'baggaid', 'cryptero', 'tutafeh', 'tutankafer', 'carapagos', 'megapagos', 'arkeapti', 'aeropteryx', 'miamiasme', 'miasmax', 'zorua', 'zoroark', 'chinchidou', 'pashmilla', 'scrutella', 'mesmerella', 'siderella', 'nucleos', 'meios', 'symbios', 'couaneton', 'lakmecygne', 'sorbebe', 'sorboul', 'sorbouboul', 'vivaldaim', 'haydaim', 'emolga', 'carabing', 'lancargot', 'trompignon', 'gaulet', 'viskuse', 'moyade', 'mamanbo', 'statitik', 'mygavolt', 'grindur', 'noacier', 'tic', 'clic', 'cliticlic', 'anchwatt', 'lamperoie', 'ohmassacre', 'lewsor', 'neitram', 'funecire', 'melancolux', 'lugulabre', 'coupenotte', 'incisache', 'tranchodon', 'polarhume', 'polagriffe', 'hexagel', 'escargaume', 'limaspeed', 'limonde', 'kungfouine', 'shaofouine', 'drakkarmin', 'gringolem', 'golemastoc', 'scalpion', 'scalproie', 'frison', 'furaiglon', 'gueriaigle', 'vostourno', 'vaututrice', 'aflamanoir', 'fermite', 'solochi', 'diamat', 'trioxhydre', 'pyronille', 'pyrax', 'cobaltium', 'terrakium', 'viridium', 'boreas', 'fulguris', 'reshiram', 'zekrom', 'demeteros', 'kyurem', 'keldeo', 'meloetta', 'genesect', 'marisson', 'boguerisse', 'blindepique', 'feunnec', 'roussil', 'goupelin', 'grenousse', 'croaporal', 'amphinobi', 'sapereau', 'excavarenne', 'passerouge', 'braisillon', 'flambusard', 'lepidonille', 'peregrain', 'prismillon', 'helionceau', 'nemelios', 'flabebe', 'floette', 'florges', 'cabriolaine', 'chevroum', 'pandespiegle', 'pandarbare', 'couafarel', 'psystigri', 'mistigrix', 'monorpale', 'dimocles', 'exagide', 'fluvetin', 'cocotine', 'sucroquin', 'cupcanaille', 'sepiatop', 'sepiatroce', 'opermine', 'golgopathe', 'venalgue', 'kravarech', 'flingouste', 'gamblast', 'galvaran', 'iguolta', 'ptyranidur', 'rexillius', 'amagara', 'dragmara', 'nymphali', 'brutalibre', 'dedenne', 'strassie', 'mucuscule', 'colimucus', 'muplodocus', 'trousselin', 'brocelome', 'desseliande', 'pitrouille', 'banshitrouye', 'grelacon', 'seracrawl', 'sonistrelle', 'bruyverne', 'xerneas', 'yveltal', 'zygarde', 'diancie', 'hoopa', 'volcanion'
  ]
}

function Pokemon () {
  this.info = {
    name: 'Pokemon',
    triggers: ['pokemon', 'pkm'],
    args: [{
      name: 'name',
      require: true,
      format: /.*/
    }]
  }
}

Pokemon.prototype.run = function (user, args, cb) {
  var pokemon = function (args) {
    var search = args[0].toLowerCase()
    var numero = -1
    for (let lang in pokemons){
      let num = pokemons[lang].indexOf(search)
      if(num !== -1){
        numero = num+1
        break
      }
    }

    if(numero === -1){
      return 'Unknown Pokemon: '+ search
    }
    numero = numero.toString()
    while(numero.length < 3){
      numero = '0' + numero
    }
    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + numero +'.png'
  }
  cb(pokemon(args))
}

module.exports = new Pokemon()