var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost/whatsupdoc-dev',function(){
  seeder.loadModels([
    '../models/doctor.js'
  ]);

  seeder.clearModels(['doctor'],function(){
    seeder.populateModels(data);
  });
});


var data = [
    { 
        'model': 'doctor',
        'documents': [
                      {
                      name:"Rosalinda Velasco",
                      specialty:"Physiologists ",
                      tags:["Physiologists","physiologist","life","science","doctor","allianz","in","physiology","chemical","physical","help","rehabilitate","blood","vessel","stomach","ncr"],
                      rating:0,
                      location:[14.9224735853,121.129253917],
                      contact:"8421",
                      email:"DarellNoe@example.com"
                      },
                      {
                      name:"Zenaida Calupaz",
                      specialty:"Allergist ",
                      tags:["Allergist","doctor","allergy","allianz","colds","allergies","cough","sore eyes","hay","fever","asthma","choke","itchy eyes","clogged nose","runny nose"],
                      rating:0,
                      location:[17.0579736063,121.308710055],
                      contact:"2316",
                      email:"KeiraOliver@example.com"
                      },
                      {
                      name:"Diane Mendoza",
                      specialty:"Infectious Disease Specialist ",
                      tags:["Infectious","Disease","Specialist","AIDS","IDS","athlete's foot","allianz","ringworm","treats","viruses","bacteria","fungi","parasites","identify","outbreaks","epidemics","and","pandemic","situations"],
                      rating:0,
                      location:[16.495388579,121.05336289],
                      contact:"3887",
                      email:"RonaRandell@example.com"
                      },
                      {
                      name:"Honielyn Fernando",
                      specialty:"Plastic Surgeon ",
                      tags:["Plastic","Surgeon","A","plastic","surgeon","philhealth","repair","boobs","doctor","botox","silicon","transplant","skin","muscles","burns","change","the","structure","tummy tuck","a","face","or","other","body","parts","for","cosmetic","and","reconstructive","purposes"],
                      rating:0,
                      location:[16.5347191268,120.852117435],
                      contact:"9042",
                      email:"EzraDaren@example.com"
                      },
                      {
                      name:"Rocylene Roque",
                      specialty:"Oncologist ",
                      tags:["Oncologist","oncologist","is","a","specialist","philhealth","physician","bone cancer","breast cancer","lung cancer","treat","cancer","skin cancer","testicular cancer","drugs","chemotherapy","radiation","and","where","needed","surgical","interventions"],
                      rating:0,
                      location:[15.0166020148,120.567443573],
                      contact:"4387",
                      email:"DoriGavin@example.com"
                      },
                      {
                      name:"Rodelin Sumiran",
                      specialty:"Orthopedic Surgeon ",
                      tags:["Orthopedic","Surgeon","If","you","philhealth","cocolife","allianz","scoliosis","arthritis","cracking sound","osteoporosis","surgery","bone","bone fracture","fratcure","bone deformity","or","broken","spine","an","orthopedic","surgeon","needs","to","be","consulted"],
                      rating:0,
                      location:[15.4419509753,120.467693115],
                      contact:"7345",
                      email:"AdriaRick@example.com"
                      },
                      {
                      name:"Ginalyn Caguete",
                      specialty:"Psychiatrists ",
                      tags:["Psychiatrists","philhealth","doctors","specialize","dissociative identity disorder","mental illness","illnesses","and","will","study","diagnoses","dual personality","counsel","schizophrenia","treat","mental","illnesses","such","as","Bipolar","dementia","depression","Alzheimer's","etc"],
                      rating:0,
                      location:[15.706006821,121.039113556],
                      contact:"6251",
                      email:"MandieJesse@example.com"
                      },
                      {
                      name:"Eunice Herrera",
                      specialty:"Thoracic Oncologist ",
tags:["Oncologist","oncologist","is","a","specialist","philhealth","physician","bone cancer","breast cancer","lung cancer","treat","cancer","skin cancer","testicular cancer","drugs","chemotherapy","radiation","and","where","needed","surgical","interventions"],
                      rating:0,
                      location:[17.2676404013,120.651358681],
                      contact:"9346",
                      email:"VelvaMarcos@example.com"
                      },
                      {
                      name:"Dottie Mercado",
                      specialty:"Hepatologists ",
                      tags:["Hepatologists","This","doctor","liver hurts","philhealth","for","diagnosing","liver pain","allianz","alcohol","diseases","of","the","liver"],
                      rating:0,
                      location:[16.6486878793,121.302991239],
                      contact:"7743",
                      email:"AntoinetteMarcellus@example.com"
                      },
                      {
                      name:"Suzette Encisa",
                      specialty:"Gastroenterologist ",
                      tags:["Gastroenterologist","A","doctor","stomach","philhealth","illnesses","related","todigestive","system","including","the","common","problem","of","gastritis","and","acid","reflux"],
                      rating:0,
                      location:[15.7699788704,120.90097702],
                      contact:"1184",
                      email:"MachelleKelvin@example.com"
                      },
                      {
                      name:"Monina Santos",
                      specialty:"Plastic Surgeon ",
                      tags:["Plastic","Surgeon","A","plastic","surgeon","is","a","doctor","that","can","transplant","skin","muscles","or","change","the","structure","of","a","face","or","other","body","parts","for","cosmetic","and","reconstructive","purposes"],
                      rating:0,
                      location:[16.2619871654,121.198723759],
                      contact:"8613",
                      email:"BrendanChong@example.com"
                      },
                      {
                      name:"Robelyn Go",
                      specialty:"Orthopedist ",
                      tags:["Orthopedist","Broken","bones","bone deformity","cracking sound","philhealth","back pain","osteoporosis","is","scoliosis","cocolife","an","orthopedist"],
                      rating:0,
                      location:[17.1936564026,121.315340935],
                      contact:"8080",
                      email:"JeaneneTravis@example.com"
                      },
                      {
                      name:"Ma. Luisa Date",
                      specialty:"Oncologist ",
                      tags:["Oncologist","oncologist","is","a","specialist","philhealth","physician","bone cancer","breast cancer","lung cancer","allianz","cancer","skin cancer","testicular cancer","drugs","chemotherapy","radiation","cocolife","where","medicare intl","surgical","interventions"],
                      rating:0,
                      location:[15.9487853329,121.171910809],
                      contact:"1318",
                      email:"MeridethArt@example.com"
                      },
                      {
                      name:"Archimedes Domdoma",
                      specialty:"Audiologist ",
                      tags:["Audiologist","understanding","speech therapy","speaking","cant talk","child cant talk","handles","problems","speech","hearing","cant understand","doctors","also","help","hearing","impaired","children","learn","to","communicate"],
                      rating:0,
                      location:[16.5394693405,120.521570988],
                      contact:"4345",
                      email:"TericaRob@example.com"
                      },
                      {
                      name:"Ilya",
                      specialty:"Cardiologist ",
                      tags:["Cardiologist","dizzy","cardiologist","is","philhealth","certified","philhealth","treat","any","heart attack","chest hurts","chest pain","heart","diseases","and","cardiovascular","diseases"],
                      rating:0,
                      location:[16.7888062237,121.142712606],
                      contact:"7285",
                      email:"TuThurman@example.com"
                      },
                      {
                      name:"Rodolfo Berame",
                      specialty:"Obstetrician ",
                      tags:["Obstetrician","This","is","a","sub","specialization","in","the","gynecological","field","of","study","and","handles","various","aspects","of","the","female","reproductive","system","such","as","childbirth","caesareans","etc"],
                      rating:0,
                      location:[17.154803258,121.092751456],
                      contact:"4336",
                      email:"VeniceBennett@example.com"
                      },
                      {
                      name:"Jesus Chin",
                      specialty:"ENT Specialist ",
                      tags:["ENT","Specialist","water to wine","doctor","chin problems","problems","cocolife","chin chin","ear","nose","and","throat","cant hear","ENT","throat hurts","ear hurts","right ear blood","left ear blood","specialist","who","will","be","performing","surgeries","on","these","parts","of","the","anatomy"],
                      rating:0,
                      location:[16.4732648726,121.220971326],
                      contact:"2327",
                      email:"LeshaGarland@example.com"
                      },
                      {
                      name:"Melisa Stoysoma",
                      specialty:"Surgeon ",
                      tags:["Surgeon","A","surgeon","is","a","doctor","philhealth","that","specializes","in","surgical","operations","and","will","have","their","own","specialties","such","as","orthopedic","ENT","brain","nuro","cardiovascular","maxillo-facial","surgery","plastic","surgery","and","transplant","surgery"],
                      rating:0,
                      location:[15.7607901471,121.153402085],
                      contact:"3775",
                      email:"KrystinaClay@example.com"
                      },
                      {
                      name:"Faye Royal",
                      specialty:"Obstetrician ",
                      tags:["Obstetrician","This","philhealth","is","a","sub","specialization","in","the","gynecological","field","of","study","and","handles","various","aspects","of","the","female","reproductive","system","such","as","childbirth","caesareans","etc"],
                      rating:0,
                      location:[16.3054289997,121.138810139],
                      contact:"3703",
                      email:"FayeRoyal@example.com"
                      },
                      {
                      name:"John Cena",
                      specialty:"Obstetrician ",
                      tags:["Obstetrician","philhealth","This","is","a","sub","specialization","in","the","gynecological","field","of","study","and","handles","various","aspects","of","the","female","reproductive","system","such","as","childbirth","caesareans","etc"],
                      rating:0,
                      location:[16.7743439276,120.733961769],
                      contact:"7006",
                      email:"ValerySidney@example.com"
                      },
                      {
                      name:"Kimberlie Morgan",
                      specialty:"General Psychiatrist ",
                      tags:["General","Psychiatrist","Any","person","with","mental","illnesses","such","as","schizophrenia","depression","and","anxiety","problems","is","treated","by","the","general","psychiatrist"],
                      rating:0,
                      location:[15.4359392687,120.528670642],
                      contact:"8153",
                      email:"KimberlieMorgan@example.com"
                      },
                      {
                      name:"France Archie",
                      specialty:"Nephrologists ",
                      tags:["Nephrologists","This","kidney stones","no erection","specialist","doctor","cant pee","treats","kidney","diseases","cocolife","renal","pee hurts","with","treatments","blood in pee","as","dialysis"],
                      rating:0,
                      location:[15.3438323967,120.754640325],
                      contact:"6527",
                      email:"FranceArchie@example.com"
                      },
                      {
                      name:"Vernia Tua",
                      specialty:"Epidemiologists ",
                      tags:["Epidemiologists","This","is","a","doctor","who","specializes","cant pee","epidemic","illnesses","which","balls hurt","highly","viral","They","are","more","of","scientists","who","identify","new","diseases","virus","mutations","and","develop","cures","and","modes","of","prevention","of","diseases","with","vaccinations","etc"],
                      rating:0,
                      location:[16.2425479851,121.056721125],
                      contact:"2992",
                      email:"VerniaTua@example.com"
                      },
                      {
                      name:"Marianne Kip",
                      specialty:"Internists ",
                      tags:["Internists","These","doctors","focus","on","medicines","acid","to","stomach","throwing up","internal pain","special","cocolife","in","the","areas","philhealth","to","the","prevention","and","treatment","of","adult","diseases"],
                      rating:0,
                      location:[16.7508737052,120.857966683],
                      contact:"6431",
                      email:"MarianneKip@example.com"
                      },
                      {
                      name:"Britta Chung",
                      specialty:"Reproductive Endocrinologist ",
                      tags:["Reproductive","Endocrinologist","This","doctor","treats","various","reproductive","problems","that","include","sexual","disorders","and","infertility","problems","etc"],
                      rating:0,
                      location:[15.3885399183,121.198278597],
                      contact:"7078",
                      email:"BrittaChung@example.com"
                      },
                      {
                      name:"Elouise Wilber",
                      specialty:"Physiologists ",
                      tags:["Physiologists","A","physiologist","is","a","life","science","doctor","who","specializes","in","physiology","and","help","rehabilitate"],
                      rating:0,
                      location:[16.552691458,121.158053638],
                      contact:"4486",
                      email:"ElouiseWilber@example.com"
                      },
                      {
                      name:"Hiroko Antione",
                      specialty:"Physiologists ",
                      tags:["Physiologists","A","physiologist","is","a","cocolife","life","science","physical","chemical","allianz","specializes","in","physiology","and","help","rehabilitate"],
                      rating:0,
                      location:[16.0778085797,121.040351438],
                      contact:"7381",
                      email:"HirokoAntione@example.com"
                      },
                      {
                      name:"Michaela Clair",
                      specialty:"Orthopedist ",
                      tags:["Orthopedist","Broken","bones","from","casts","cocolife","broken bones","osteoporosis","scoliosis","treated","medicare intl","broken foot","orthopedist"],
                      rating:0,
                      location:[15.6209416646,120.70522935],
                      contact:"9344",
                      email:"MichaelaClair@example.com"
                      },
                      {
                      name:"Rossana Kendall",
                      specialty:"Obstetrician ",
                      tags:["Obstetrician","This","is","a","sub","specialization","in","the","allianz","gynecological","field","of","study","and","handles","various","aspects","of","the","female","reproductive","system","such","as","childbirth","caesareans","etc"],
                      rating:0,
                      location:[15.0166401698,121.047354009],
                      contact:"9542",
                      email:"RossanaKendall@example.com"
                      },
                      {
                      name:"Delphia Carlton",
                      specialty:"Hepatologists ",
                      tags:["Hepatologists","This","doctor","is","responsible","for","diagnosing","cocolife","and","treating","diseases","of","the","liver"],
                      rating:0,
                      location:[16.7470777992,120.933811383],
                      contact:"5767",
                      email:"DelphiaCarlton@example.com"
                      },
                      {
                      name:"Alvaro Alfonso",
                      specialty:"Immunologist ",
                      tags:["Immunologist","This","is","a","doctor","dengue","philhealth","studying","cocolife","everything","about","the","immune","system","and","treats","any","diseases","related"],
                      rating:0,
                      location:[17.3114802097,120.67369342],
                      contact:"2028",
                      email:"AlvaroAlfonso@example.com"
                      },
                      {
                      name:"Doreen Rene",
                      specialty:"Reproductive Endocrinologist ",
                      tags:["Reproductive","Endocrinologist","This","doctor","treats","various","allianz","reproductive","problems","that","include","sexual","disorders","and","infertility","problems","etc"],
                      rating:0,
                      location:[15.2370626122,120.48689506],
                      contact:"3804",
                      email:"DoreenRene@example.com"
                      },
                      {
                      name:"Idella Alphonso",
                      specialty:"Orthopedic Surgeon ",
                      tags:["Orthopedic","Surgeon","scoliosis","cast","broken foot","broken bones","arthritis","cocolife","medicare intl","osteoporosis","and","other","bone","related","illnesses","or","broken","bones","an","orthopedic","surgeon","needs","to","be","consulted"],
                      rating:0,
                      location:[15.6801637958,121.142450232],
                      contact:"2906",
                      email:"IdellaAlphonso@example.com"
                      },
                      {
                      name:"Mirna Norbert",
                      specialty:"Anesthesiologist ",
                      tags:["Anesthesiologist","This","is","the","doctor","that","helps","you","to","allianz","sleep","through","painful","operations","and","medical","diagnoses","They","are","responsible","for","administering","the","anesthesia","and","be","present","during","surgeries","to","help","in","complications","arising","from","anesthesia","medications"],
                      rating:0,
                      location:[16.9909824112,120.932423897],
                      contact:"5782",
                      email:"MirnaNorbert@example.com"
                      },
                      {
                      name:"Diedra Len",
                      specialty:"Nephrologists ",
                      tags:["Nephrologists","This","is","a","specialist","doctor","that","treats","cocolife","kidney","allianz","diseases","and","renal","problems","with","treatments","such","as","dialysis"],
                      rating:0,
                      location:[15.8660146942,120.920088144],
                      contact:"7053",
                      email:"DiedraLen@example.com"
                      },
                      {
                      name:"Kerstin Harlan",
                      specialty:"Ophthalmologist ",
                      tags:["Ophthalmologist","This","is","a","doctor","that","cocolife","treats","eyes","and","various","eye","defects","blindness","and","performs","different","eye","surgeries"],
                      rating:0,
                      location:[14.9434577388,120.680656136],
                      contact:"3847",
                      email:"KerstinHarlan@example.com"
                      },
                      {
                      name:"Tarah Booker",
                      specialty:"Orthopedist ",
                      tags:["Orthopedist","Broken","bones","from","falls","or","osteoporosis","is","allianz","treated","by","an","orthopedist"],
                      rating:0,
                      location:[17.0873931581,120.794087359],
                      contact:"1559",
                      email:"TarahBooker@example.com"
                      },
                      {
                      name:"Jeffry Mark",
                      specialty:"Infectious Disease Specialist ",
                      tags:["Infectious","Disease","Specialist","An","IDS","studies","and","medicare intl","treats","diseases","caused","by","viruses","bacteria","fungi","parasites","and","will","identify","outbreaks","of","epidemics","and","pandemic","situations"],
                      rating:0,
                      location:[14.9531536424,120.822042487],
                      contact:"4765",
                      email:"JeffryMark@example.com"
                      },
                      {
                      name:"Marylouise Francesco",
                      specialty:"Andrologists ",
                      tags:["Andrologists","An","andrologist","is","a","specialist","doctor","that","helps","in","diagnosing","and","treating","male","reproductive","system","disorders"],
                      rating:0,
                      location:[15.6630479993,120.474844783],
                      contact:"9090",
                      email:"MarylouiseFrancesco@example.com"
                      },
                      {
                      name:"Denisha Otis",
                      specialty:"Radiologists ",
                      tags:["Radiologists","A","doctor","who","specializes","in","use","of","X-rays","medicare intl","or","other","imaging","cocolife","technologies","in","order","to","diagnose","various","illnesses"],
                      rating:0,
                      location:[16.6715407638,121.154707345],
                      contact:"5685",
                      email:"DenishaOtis@example.com"
                      },
                      {
                      name:"Camila Sergio",
                      specialty:"Hematologist ",
                      tags:["Hematologist","Blood","and","its","diseases","is","studied","by","a","medicare intl","hematologist","cocolife","blood"],
                      rating:0,
                      location:[17.2927135809,121.111053821],
                      contact:"6182",
                      email:"CamilaSergio@example.com"
                      },
                      {
                      name:"Ruthanne Clarence",
                      specialty:"Internists ",
                      tags:["Internists","These","doctors","focus","on","medicines","related","to","adults","medicare intl","and","have","special","expertise","in","the","areas","related","to","the","prevention","and","treatment","of","adult","diseases"],
                      rating:0,
                      location:[17.1321093331,120.524575816],
                      contact:"3748",
                      email:"RuthanneClarence@example.com"
                      },
                      {
                      name:"Inga Jamar",
                      specialty:"Plastic Surgeon ",
                      tags:["Plastic","Surgeon","If","you","are","not","happy","with","how","you","look","a","medicare intl","plastic","surgeon","can","change","your","appearance","by","performing","cosmetic","surgery","on","you"],
                      rating:0,
                      location:[16.8503423591,121.021118526],
                      contact:"6518",
                      email:"IngaJamar@example.com"
                      },
                      {
                      name:"Palmer Rayford",
                      specialty:"Psychiatrists ",
                      tags:["Psychiatrists","These","doctors","specialize","in","mental","illnesses","and","will","study","medicare intl","diagnoses","and","counsel","and","treat","mental","illnesses","such","as","Bipolar","dementia","depression","Alzheimer's","etc"],
                      rating:0,
                      location:[15.9548910792,120.751831309],
                      contact:"9589",
                      email:"PalmerRayford@example.com"
                      },
                      {
                      name:"Dianna Elliot",
                      specialty:"Rheumatologist ",
                      tags:["Rheumatologist","A","physician","responsible","forhandling","autoimmune","disorders","and","allergic","conditions"],
                      rating:0,
                      location:[17.2655220273,121.16199812],
                      contact:"7679",
                      email:"DiannaElliot@example.com"
                      },
                      {
                      name:"Virgil Damian",
                      specialty:"Infectious Disease Specialist ",
                      tags:["Infectious","Disease","Specialist","An","IDS","studies","and","treats","diseases","caused","by","viruses","bacteria","fungi","parasites","and","will","identify","outbreaks","of","epidemics","and","pandemic","situations"],
                      rating:0,
                      location:[15.0235892827,121.044333721],
                      contact:"9946",
                      email:"VirgilDamian@example.com"
                      },
                      {
                      name:"Dia Dario",
                      specialty:"Physiologists ",
                      tags:["Physiologists","A","physiologist","is","a","life","science","doctor","who","specializes","in","physiology","and","help","rehabilitate"],
                      rating:0,
                      location:[15.5660796815,120.725864918],
                      contact:"1860",
                      email:"DiaDario@example.com"
                      },
                      {
                      name:"Herta Frankie",
                      specialty:"Thoracic Oncologist ",
                      tags:["Thoracic","Oncologist","This","doctor","deals","with","cancer","of","the","lungs","esophagus","and","chest"],
                      rating:0,
                      location:[15.9181203702,121.270557381],
                      contact:"6490",
                      email:"HertaFrankie@example.com"
                      },
                      {
                      name:"Lanelle Randolph",
                      specialty:"Infectious Disease Specialist ",
                      tags:["Infectious","Disease","Specialist","An","IDS","studies","and","treats","diseases","caused","by","viruses","bacteria","fungi","parasites","and","will","identify","outbreaks","of","epidemics","and","pandemic","situations"],
                      rating:0,
                      location:[15.1440140544,120.580052085],
                      contact:"3663",
                      email:"LanelleRandolph@example.com"
                      }
        ]
    }
];  