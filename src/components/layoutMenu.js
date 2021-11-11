export default 
{
	// the route here is not the url, its the route of the layout thingy
	//
	route: {
		path: "/",
		routes: [
			{
				path: '/home',
				name: 'home'
			},

			{
				path: '/A',
				name: 'contentA'
			},
		
			{
				path: '/B',
				name: 'contentB',
				// routes: [
				// 	{
				// 		path: '/B1',
				// 		name: "contentB1"
				// 	}
				// ]
			},
		
			{
				path: '/messages',
				name: 'Messages',
			},

			{
        path: '/hierachy',
        name: 'hierachy',
        routes: [
          {
            path: '/hierachy/sub-page1',
            name: '1st',
          },
          {
            path: '/hierachy/sub-page2',
            name: '2nd',
          },
          {
            path: '/hierachy/sub-page3',
            name: '3rd',
          },
        ],
      },
		]
	},

	location: {
		pathname: "/home"
	}
};