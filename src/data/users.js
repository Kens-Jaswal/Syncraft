// src/data/users.js

export const users = [
	{
		id: 1,
		role: 'Admin',
		firstName: 'John',
		lastName: 'Doe',
		phone: '9876543210',
		email: 'john.doe1@example.com',
		dateOfBirth: '1985-01-15',
		address: '123 Main St, New York, NY'
	},
	{
		id: 2,
		role: 'Editor',
		firstName: 'Jane',
		lastName: 'Smith',
		phone: '9876543211',
		email: 'jane.smith2@example.com',
		dateOfBirth: '1990-03-22',
		address: '456 Maple Ave, Los Angeles, CA'
	},
	{
		id: 3,
		role: 'Viewer',
		firstName: 'Sam',
		lastName: 'Wilson',
		phone: '9876543212',
		email: 'sam.wilson3@example.com',
		dateOfBirth: '1992-05-18',
		address: '789 Oak Blvd, Chicago, IL'
	},
	{
		id: 4,
		role: 'Admin',
		firstName: 'Emily',
		lastName: 'Clark',
		phone: '9876543213',
		email: 'emily.clark4@example.com',
		dateOfBirth: '1988-07-10',
		address: '321 Pine Rd, Houston, TX'
	},
	{
		id: 5,
		role: 'Editor',
		firstName: 'Mike',
		lastName: 'Johnson',
		phone: '9876543214',
		email: 'mike.johnson5@example.com',
		dateOfBirth: '1983-09-05',
		address: '654 Cedar Ln, Phoenix, AZ'
	},
	{
		id: 6,
		role: 'Viewer',
		firstName: 'Laura',
		lastName: 'Brown',
		phone: '9876543215',
		email: 'laura.brown6@example.com',
		dateOfBirth: '1991-11-30',
		address: '987 Spruce Dr, Philadelphia, PA'
	},
	{
		id: 7,
		role: 'Admin',
		firstName: 'David',
		lastName: 'Lee',
		phone: '9876543216',
		email: 'david.lee7@example.com',
		dateOfBirth: '1986-02-28',
		address: '213 Birch St, San Antonio, TX'
	},
	{
		id: 8,
		role: 'Editor',
		firstName: 'Sara',
		lastName: 'Taylor',
		phone: '9876543217',
		email: 'sara.taylor8@example.com',
		dateOfBirth: '1993-04-14',
		address: '876 Willow Way, San Diego, CA'
	},
	{
		id: 9,
		role: 'Viewer',
		firstName: 'Chris',
		lastName: 'Martin',
		phone: '9876543218',
		email: 'chris.martin9@example.com',
		dateOfBirth: '1989-06-07',
		address: '345 Aspen Ct, Dallas, TX'
	},
	{
		id: 10,
		role: 'Admin',
		firstName: 'Olivia',
		lastName: 'Hall',
		phone: '9876543219',
		email: 'olivia.hall10@example.com',
		dateOfBirth: '1994-08-20',
		address: '654 Elm St, San Jose, CA'
	}
	// ... 40 more users below
];

for (let i = 11; i <= 50; i++) {
	users.push({
		id: i,
		role: ['Admin', 'Editor', 'Viewer'][i % 3],
		firstName: `User${i}`,
		lastName: `Last${i}`,
		phone: `98765432${(i + 10).toString().padStart(2, '0')}`,
		email: `user${i}@example.com`,
		dateOfBirth: `199${i % 10}-0${(i % 9) + 1}-1${i % 9}`,
		address: `${i * 5} Example St, City${i}, State`
	});
}
