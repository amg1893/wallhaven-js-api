class WallhavenApi {

	constructor() {
		this.baseURL = '<ENTER YOUR HEROKU URL INSTANCE HERE>';
		this.searchURL = this.baseURL+'/search';
		this.detailsURL = this.baseURL+'/details/';
		this.fullImageURL = "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-<id>.jpg";
	}

	getByKeyword(keyword, optionsOrCallback, callback){
		var parameters = {};
		if(typeof optionsOrCallback == 'object') {
			parameters = optionsOrCallback;
		}
		parameters.keyword = keyword;
		$.get(this.searchURL, parameters).done(function(resp){
			if(typeof optionsOrCallback == 'function') {
				optionsOrCallback(resp);
			} else if(typeof callback == 'function') {
				callback(resp);
			}
		});
	}

	getDetails(id, callback) {
		var parameters = {};
		parameters.id = id;
		$.get(this.baseURL, parameters).done(function(resp){
			if(typeof callback == 'function') {
				callback(resp);
			}
		});
	}

	getFullImageURL(id) {
		return this.fullImageURL.replace('<id>', id);
	}

}