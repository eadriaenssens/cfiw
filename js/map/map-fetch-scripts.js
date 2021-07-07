//a js file. yay

//fetch footprints data
const loadFootprints = async () => {
			/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
			let url = "https://markoco14.github.io/cfiw/json/footprints.json";
			try {
				const res = await fetch(url);
				footprintData = await res.json();
				//clean the coords cells
				for (i=0; i<footprintData.length; i++) {
					footprintData[i].coords = footprintData[i].coords.split(',');
					footprintData[i].coords = {lat: Number(footprintData[i].coords[0]), lng: Number(footprintData[i].coords[1])};
				}
				//clean the date cells				
				for (i=0; i<footprintData.length; i++) {
					let index = footprintData[i].date.indexOf('T')
					footprintData[i].date = footprintData[i].date.slice(0,index);
				}
				console.log(footprintData);
				
				createSliderDatesArray(footprintData)
			} catch (err) {
				console.log(err);
			}
		};

//fetch disinfection data
const loadDisinfections = async () => {
			/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
			let url = "https://markoco14.github.io/cfiw/json/disinfections.json";
			try {
				const res = await fetch(url);
				disinfectionData = await res.json();
				//clean the coords cells
				for (i=0; i<disinfectionData.length; i++) {
					disinfectionData[i].coords = disinfectionData[i].coords.split(',');
					disinfectionData[i].coords = {lat: Number(disinfectionData[i].coords[0]), lng: Number(disinfectionData[i].coords[1])};
				}
				//clean the date cells				
				for (i=0; i<disinfectionData.length; i++) {
					let index = disinfectionData[i].date.indexOf('T')
					disinfectionData[i].date = disinfectionData[i].date.slice(0,index);
				}
				console.log(disinfectionData);
			} catch (err) {
				console.log(err);
			}
		};

//fetch chinese vaccination location data
const loadChineseHospitals = async () => {
			/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
			let url = "https://markoco14.github.io/cfiw/json/tv-other.json";
			try {
				const res = await fetch(url);
				chineseHospitalData = await res.json();
				//clean the coords cells
				for (i=0; i<chineseHospitalData.length; i++) {
					chineseHospitalData[i].coords = chineseHospitalData[i].coords.split(',');
					chineseHospitalData[i].coords = {lat: Number(chineseHospitalData[i].coords[0]), lng: Number(chineseHospitalData[i].coords[1])};
				}
				console.log(chineseHospitalData);
			} catch (err) {
				console.log(err);
			}
		};

//fetch chinese vaccination location data
const loadEnglishHospitals = async () => {
			/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
			let url = "https://markoco14.github.io/cfiw/json/tv-reco.json";
			try {
				const res = await fetch(url);
				englishHospitalData = await res.json();
				//clean the coords cells
				for (i=0; i<englishHospitalData.length; i++) {
					englishHospitalData[i].coords = englishHospitalData[i].coords.split(',');
					englishHospitalData[i].coords = {lat: Number(englishHospitalData[i].coords[0]), lng: Number(englishHospitalData[i].coords[1])};
				}
				console.log(englishHospitalData);
			} catch (err) {
				console.log(err);
			}
		};