export const patients = [
	{
		uhid: 'UHID001',
		phone: '9876543210',
		patientName: 'Amit Sharma',
		guardianName: 'Rajesh Sharma',
		dob: '1985-06-12',
		gender: 'Male',
		address: '123, Model Town, Delhi',
		referredBy: 'doctor'
	},
	{
		uhid: 'UHID002',
		phone: '9811122233',
		patientName: 'Sneha Verma',
		guardianName: 'Ravi Verma',
		dob: '1990-01-25',
		gender: 'Female',
		address: '45, Sector 12, Noida',
		referredBy: 'self'
	},
	{
		uhid: 'UHID003',
		phone: '9123456789',
		patientName: 'Rohan Mehta',
		guardianName: 'Suresh Mehta',
		dob: '1995-03-14',
		gender: 'Male',
		address: '78, Andheri West, Mumbai',
		referredBy: 'doctor'
	},
	{
		uhid: 'UHID004',
		phone: '9000001111',
		patientName: 'Pooja Singh',
		guardianName: 'Amit Singh',
		dob: '1993-11-30',
		gender: 'Female',
		address: '12, Ashok Nagar, Lucknow',
		referredBy: 'self'
	},
	{
		uhid: 'UHID005',
		phone: '9999912345',
		patientName: 'Karan Patel',
		guardianName: 'Mahesh Patel',
		dob: '1988-09-05',
		gender: 'Male',
		address: '56, Ellis Bridge, Ahmedabad',
		referredBy: 'doctor'
	},
	// Add more entries similarly...

	// Dummy loop to fill till 50
	...Array.from({ length: 45 }, (_, i) => {
		const id = i + 6;
		return {
			uhid: `UHID${String(id).padStart(3, '0')}`,
			phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
			patientName: `Patient ${id}`,
			guardianName: `Guardian ${id}`,
			dob: `19${70 + Math.floor(Math.random() * 30)}-${String(Math.ceil(Math.random() * 12)).padStart(2, '0')}-${String(Math.ceil(Math.random() * 28)).padStart(2, '0')}`,
			gender: Math.random() > 0.5 ? 'Male' : 'Female',
			address: `Address ${id}, City`,
			referredBy: Math.random() > 0.5 ? 'doctor' : 'self'
		};
	})
];
