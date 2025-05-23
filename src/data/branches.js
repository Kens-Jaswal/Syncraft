export const branches = [
	{
		branchName: 'cdl-path mohali',
		phone: '9876543210',
		branchCode: 'cpm',
		ownerName: 'Satish Kumar',
		address: '123, Model Town, Delhi'
	},
	{
		branchName: 'cdl-path chandigarh',
		phone: '9876501234',
		branchCode: 'cpc',
		ownerName: 'Ravi Sharma',
		address: '45, Sector 17, Chandigarh'
	},
	{
		branchName: 'cdl-path panchkula',
		phone: '9876598765',
		branchCode: 'cpp',
		ownerName: 'Neha Gupta',
		address: '101, MDC Sector 4, Panchkula'
	},
	{
		branchName: 'cdl-path zirakpur',
		phone: '9876512345',
		branchCode: 'cpz',
		ownerName: 'Arun Mehta',
		address: '67, VIP Road, Zirakpur'
	},
	{
		branchName: 'cdl-path ludhiana',
		phone: '9876523456',
		branchCode: 'cpl',
		ownerName: 'Poonam Kaur',
		address: '88, Ferozepur Road, Ludhiana'
	},

	// Auto-generated dummy branches
	...Array.from({ length: 10 }, (_, i) => {
		const id = i + 6;
		return {
			branchName: `Branch ${id}`,
			phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
			branchCode: `code${id}`,
			ownerName: `Owner ${id}`,
			address: `Address ${id}, City`
		};
	})
];
