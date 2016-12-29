let config = (uiGmapGoogleMapApiProvider) => 
{
	 uiGmapGoogleMapApiProvider.configure({
          libraries: 'geometry,visualization'
      });
}

config.$inject = ['uiGmapGoogleMapApiProvider'];
module.exports = config;