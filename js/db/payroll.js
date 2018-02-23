function newDate(date){

	var d = new Date(date);

	return d.toDateString();
}

users = TAFFY([

	{
		username:"sa", 
		password:"p@55w0rd",
		role:1
	}
])

period = TAFFY([

	{
		id:1,
		start: newDate("01/01/2018"),
		end: newDate("01/31/2018"),
		status: "Closed",
		active: false
	},
	{
		id:2,
		start: newDate("02/01/2018"),
		end: newDate("02/28/2018"),
		status: "Open",
		active: true
	}
])

roles = TAFFY([
	
	{
		id:1,
		name:'Administrator',
		descr:'Super Administrator/Root User'
	},
	{
		id:2,
		name:'Payroll Administrator',
		descr:'Payroll Administrator/Payroll Manager'
	},
	{
		id:4,
		name:'Payroll User',
		descr:'Normal User/Payroll User'
	}
]);

depts = TAFFY([

	{
		id:1,
		alias:'HR',
		descr:'Human Resource Department'
	},
	{
		id:3,
		alias:'FIN',
		descr:'Finance Department'
	},
	{
		id:4,
		alias:'IT',
		descr:'Information Technology and Support'
	}
])

posts = TAFFY([

	{
		id:1,
		dept:1,
		name:'HR Manager',
		descr:'Human Resource Managers'
	},
	{
		id:3,
		dept:3,
		name:'Finance Manager',
		descr:'Finance Head'
	}
]);

benefits = TAFFY([

	{
		id:5,
		name:'Travel Expenses',
		amount:"10000.00",
		descr:'N/A',
		percentage:"False",
		deduct:"False",
		taxable:"False",
		active:"True"
	},
	{
		id:6,
		name:'Child Allowance',
		amount:"10",
		descr:'N/A',
		percentage:"True",
		deduct:"False",
		taxable:"False",
		active:"False"
	},
	{
		id:9,
		name:'Housing Allowance',
		amount:"10000.00",
		descr:'N/A',
		percentage:"False",
		deduct:"False",
		taxable:"True",
		active:"True"
	},
	{
		id:11,
		name:"NHIF",
		amount:"320.00",
		descr:"National Hospital Insurance Fund",
		percentage:"False",
		deduct:"True",
		taxable:"False",
		active:"True"
	},
	{
		id:12,
		name:"NSSF",
		amount:"320.00",
		descr:"National Social Security Fund",
		percentage:"False",
		deduct:"True",
		taxable:"False",
		active:"True"
	}
])

employees = TAFFY([

	{
		id: 1, 
		email: "dena.delzell@hotmail.com",
		county: "Nakuru", 
		mobile: "7977625049", 
		status: "Active",
		address: "Milimani",
		marital_status: "Single",
		lastname: "Delzell", 
		firstname: "Dena",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 2, 
		email: "veola.fansler@gmail.com",
		county: "Nakuru", 
		mobile: "7843026380", 
		status: "Inactive",
		address: "Pipeline",
		marital_status: "Divorced",
		lastname: "Fansler", 
		firstname: "Veola",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 3, 
		email: "joanie.brenner@hotmail.com",
		county: "Mombasa", 
		mobile: "7849307870", 
		status: "Active",
		address: "Milimani",
		marital_status: "Single",
		lastname: "Brenner", 
		firstname: "Joanie",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 4, 
		email: "sharyl.seibert@ymail.com",
		county: "Nairobi", 
		mobile: "7833196426", 
		status: "Pending",
		address: "Milimani",
		marital_status: "Divorced",
		lastname: "Seibert", 
		firstname: "Sharyl",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 5, 
		email: "zulma.abrev@gmail.com",
		county: "Mombasa", 
		mobile: "7839917497", 
		status: "Inactive",
		address: "Milimani",
		marital_status: "Married",
		lastname: "Abrev", 
		firstname: "Zulma",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 6, 
		email: "delphine.hepburn@ymail.com",
		county: "Kisumu", 
		mobile: "7890240541", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Married",
		lastname: "Hepburn", 
		firstname: "Delphine",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 7, 
		email: "marcus.effinger@ymail.com",
		county: "Nairobi", 
		mobile: "7935219948", 
		status: "Pending",
		address: "Milimani",
		marital_status: "Divorced",
		lastname: "Effinger", 
		firstname: "Marcus",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 8, 
		email: "cleo.hysell@ymail.com",
		county: "Nakuru", 
		mobile: "7918735957", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Married",
		lastname: "Hysell", 
		firstname: "Cleo",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 9, 
		email: "yuk.effinger@hotmail.com",
		county: "Meru", 
		mobile: "7813164374", 
		status: "Active",
		address: "Milimani",
		marital_status: "Married",
		lastname: "Effinger", 
		firstname: "Yuk",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 10, 
		email: "sharyl.allbright@ymail.com",
		county: "Nairobi", 
		mobile: "7879904217", 
		status: "Active",
		address: "Pipeline",
		marital_status: "Married",
		lastname: "Allbright", 
		firstname: "Sharyl",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 11, 
		email: "sallie.seibert@hotmail.com",
		county: "Meru", 
		mobile: "7844754456", 
		status: "Active",
		address: "Milimani",
		marital_status: "Divorced",
		lastname: "Seibert", 
		firstname: "Sallie",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 12, 
		email: "makeda.lemaire@hotmail.com",
		county: "Nairobi", 
		mobile: "7859950053", 
		status: "Pending",
		address: "Lando",
		marital_status: "Married",
		lastname: "Lemaire", 
		firstname: "Makeda",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 13, 
		email: "marietta.sabella@ymail.com",
		county: "Meru", 
		mobile: "7894658665", 
		status: "Active",
		address: "Milimani",
		marital_status: "Divorced",
		lastname: "Sabella", 
		firstname: "Marietta",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 14, 
		email: "francisca.ertel@gmail.com",
		county: "Meru", 
		mobile: "7829596315", 
		status: "Pending",
		address: "Bedrock",
		marital_status: "Divorced",
		lastname: "Ertel", 
		firstname: "Francisca",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 15, 
		email: "lakia.sabella@hotmail.com",
		county: "Nakuru", 
		mobile: "7899434488", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Divorced",
		lastname: "Sabella", 
		firstname: "Lakia",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 16, 
		email: "joanie.brenner@hotmail.com",
		county: "Meru", 
		mobile: "7990301522", 
		status: "Inactive",
		address: "Bedrock",
		marital_status: "Married",
		lastname: "Brenner", 
		firstname: "Joanie",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 17, 
		email: "chun.alvelo@gmail.com",
		county: "Mombasa", 
		mobile: "7828257778", 
		status: "Active",
		address: "Bedrock",
		marital_status: "Divorced",
		lastname: "Alvelo", 
		firstname: "Chun",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 18, 
		email: "ha.respass@ymail.com",
		county: "Mombasa", 
		mobile: "7979165696", 
		status: "Pending",
		address: "Pipeline",
		marital_status: "Divorced",
		lastname: "Respass", 
		firstname: "Ha",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 19, 
		email: "marcus.ramos@hotmail.com",
		county: "Meru", 
		mobile: "7976066458", 
		status: "Pending",
		address: "Milimani",
		marital_status: "Single",
		lastname: "Ramos", 
		firstname: "Marcus",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 20, 
		email: "raquel.beson@gmail.com",
		county: "Nakuru", 
		mobile: "7921852316", 
		status: "Pending",
		address: "Pipeline",
		marital_status: "Single",
		lastname: "Beson", 
		firstname: "Raquel",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 21, 
		email: "morgan.ramos@gmail.com",
		county: "Mombasa", 
		mobile: "7908967698", 
		status: "Pending",
		address: "Pipeline",
		marital_status: "Divorced",
		lastname: "Ramos", 
		firstname: "Morgan",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 22, 
		email: "kent.haddock@ymail.com",
		county: "Mombasa", 
		mobile: "7795269626", 
		status: "Active",
		address: "Milimani",
		marital_status: "Single",
		lastname: "Haddock", 
		firstname: "Kent",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 23, 
		email: "morgan.driskell@ymail.com",
		county: "Nakuru", 
		mobile: "7913527001", 
		status: "Pending",
		address: "Westbrough",
		marital_status: "Divorced",
		lastname: "Driskell", 
		firstname: "Morgan",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 24, 
		email: "chun.abrev@ymail.com",
		county: "Meru", 
		mobile: "7981821696", 
		status: "Pending",
		address: "Pipeline",
		marital_status: "Divorced",
		lastname: "Abrev", 
		firstname: "Chun",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 25, 
		email: "clare.delzell@ymail.com",
		county: "Nairobi", 
		mobile: "7821935077", 
		status: "Active",
		address: "Pipeline",
		marital_status: "Single",
		lastname: "Delzell", 
		firstname: "Clare",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 26, 
		email: "princess.hoeppner@gmail.com",
		county: "Mombasa", 
		mobile: "7951463052", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Single",
		lastname: "Hoeppner", 
		firstname: "Princess",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 27, 
		email: "veola.hepburn@ymail.com",
		county: "Kisumu", 
		mobile: "7831714012", 
		status: "Inactive",
		address: "Bedrock",
		marital_status: "Single",
		lastname: "Hepburn", 
		firstname: "Veola",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 28, 
		email: "belle.sher@hotmail.com",
		county: "Nakuru", 
		mobile: "7816381368", 
		status: "Inactive",
		address: "Pipeline",
		marital_status: "Divorced",
		lastname: "Sher", 
		firstname: "Belle",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 29, 
		email: "peter.hoeppner@ymail.com",
		county: "Kisumu", 
		mobile: "7936714616", 
		status: "Active",
		address: "Milimani",
		marital_status: "Married",
		lastname: "Hoeppner", 
		firstname: "Peter",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 30, 
		email: "peter.ramos@hotmail.com",
		county: "Kisumu", 
		mobile: "7973812179", 
		status: "Inactive",
		address: "Pipeline",
		marital_status: "Married",
		lastname: "Ramos", 
		firstname: "Peter",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 31, 
		email: "ha.sereno@ymail.com",
		county: "Kisumu", 
		mobile: "7987999398", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Married",
		lastname: "Sereno", 
		firstname: "Ha",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 32, 
		email: "veola.stutz@ymail.com",
		county: "Kisumu", 
		mobile: "7777187152", 
		status: "Inactive",
		address: "Bedrock",
		marital_status: "Divorced",
		lastname: "Stutz", 
		firstname: "Veola",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 33, 
		email: "peter.sereno@gmail.com",
		county: "Nairobi", 
		mobile: "7923590748", 
		status: "Active",
		address: "Bedrock",
		marital_status: "Married",
		lastname: "Sereno", 
		firstname: "Peter",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 34, 
		email: "zulma.koelling@gmail.com",
		county: "Nakuru", 
		mobile: "7991905546", 
		status: "Active",
		address: "Westbrough",
		marital_status: "Single",
		lastname: "Koelling", 
		firstname: "Zulma",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 35, 
		email: "chauncey.stutz@hotmail.com",
		county: "Nairobi", 
		mobile: "7900923852", 
		status: "Active",
		address: "Lando",
		marital_status: "Single",
		lastname: "Stutz", 
		firstname: "Chauncey",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 36, 
		email: "kent.abrev@ymail.com",
		county: "Mombasa", 
		mobile: "7923020198", 
		status: "Pending",
		address: "Westbrough",
		marital_status: "Divorced",
		lastname: "Abrev", 
		firstname: "Kent",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 37, 
		email: "dena.ramos@hotmail.com",
		county: "Meru", 
		mobile: "7940321700", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Single",
		lastname: "Ramos", 
		firstname: "Dena",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 38, 
		email: "chauncey.abrev@hotmail.com",
		county: "Nairobi", 
		mobile: "7955760737", 
		status: "Active",
		address: "Bedrock",
		marital_status: "Married",
		lastname: "Abrev", 
		firstname: "Chauncey",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 39, 
		email: "randee.highfield@hotmail.com",
		county: "Mombasa", 
		mobile: "7925737110", 
		status: "Inactive",
		address: "Milimani",
		marital_status: "Married",
		lastname: "Highfield", 
		firstname: "Randee",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 40, 
		email: "lakeisha.batton@gmail.com",
		county: "Nairobi", 
		mobile: "7849879504", 
		status: "Inactive",
		address: "Milimani",
		marital_status: "Divorced",
		lastname: "Batton", 
		firstname: "Lakeisha",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 41, 
		email: "cleo.hepburn@hotmail.com",
		county: "Nairobi", 
		mobile: "7904137614", 
		status: "Active",
		address: "Bedrock",
		marital_status: "Divorced",
		lastname: "Hepburn", 
		firstname: "Cleo",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 42, 
		email: "clare.haddock@hotmail.com",
		county: "Nairobi", 
		mobile: "7799830005", 
		status: "Active",
		address: "Milimani",
		marital_status: "Single",
		lastname: "Haddock", 
		firstname: "Clare",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 43, 
		email: "frances.stutz@ymail.com",
		county: "Kisumu", 
		mobile: "7858299910", 
		status: "Pending",
		address: "Lando",
		marital_status: "Married",
		lastname: "Stutz", 
		firstname: "Frances",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 44, 
		email: "delphine.sher@hotmail.com",
		county: "Mombasa", 
		mobile: "7810693229", 
		status: "Active",
		address: "Westbrough",
		marital_status: "Single",
		lastname: "Sher", 
		firstname: "Delphine",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 45, 
		email: "raquel.sickler@ymail.com",
		county: "Mombasa", 
		mobile: "7876889336", 
		status: "Active",
		address: "Lando",
		marital_status: "Single",
		lastname: "Sickler", 
		firstname: "Raquel",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 46, 
		email: "dena.ramos@hotmail.com",
		county: "Nairobi", 
		mobile: "7864764946", 
		status: "Inactive",
		address: "Pipeline",
		marital_status: "Married",
		lastname: "Ramos", 
		firstname: "Dena",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 47, 
		email: "brook.bowens@gmail.com",
		county: "Meru", 
		mobile: "7875175158", 
		status: "Inactive",
		address: "Westbrough",
		marital_status: "Married",
		lastname: "Bowens", 
		firstname: "Brook",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 48, 
		email: "michael.hysell@gmail.com",
		county: "Nairobi", 
		mobile: "7871552281", 
		status: "Inactive",
		address: "Bedrock",
		marital_status: "Single",
		lastname: "Hysell", 
		firstname: "Michael",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 49, 
		email: "michael.abrev@gmail.com",
		county: "Nairobi", 
		mobile: "7832423780", 
		status: "Pending",
		address: "Pipeline",
		marital_status: "Single",
		lastname: "Abrev", 
		firstname: "Michael",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	},
	{
		id: 50, 
		email: "belle.sher@ymail.com",
		county: "Meru", 
		mobile: "7968210634", 
		status: "Pending",
		address: "Lando",
		marital_status: "Divorced",
		lastname: "Sher", 
		firstname: "Belle",
		other_address:"",
		other_email:"",
		other_mobile:"",
		start_date:"",
		end_date:"",
		dob:"",
		bank_details:"",
		country:"",
		city:"",
		nssf_no:"",
		nhif_no:"",
		pin:"",
		idno:"",
		post:""
	}
]);