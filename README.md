# Wallhaven Javascript API

This library searchs or obtains wallpapers from wallhaven. The petitions are made to a Heroku instance of the [wallhaven-api from www-working and modified by me](https://github.com/amg1893/wallhaven-js-api). In order to make it work, you have to create an instance and put the URL into the baseURL of the library.

## Usage
```js
	var api = new Wallhaven();
	photo.getByKeyword('keyword', {sorting: 'random'}, function(resp){
		// iterate over resp.images
	});
	photo.getDetails(309834, function(resp){
		// details of the image
	});
```

### getByKeyword(keyword, [options,] callback)
Searchs by keyword. Possible options:

#### options.categories

Type: `Array`<br>
Default: `['general', 'anime', 'people']`

#### options.page

Type: `Number`<br>
Default: `1`

#### options.sorting

Type: `string`<br>
Default: `relevance`<br>
Value: one of `relevance` `random` `date_added` `views` `favorites`

#### options.nsfw

Type: `boolean`<br>
Default: `false`

Show NSFW (not safe for work) result.

#### options.sketchy

Type: `boolean`<br>
Default: `false`

Show sketchy wallpapers only.

### getDetails(id, callback)
Get details of a wallpaper by id.