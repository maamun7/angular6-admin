import * as $ from "jquery";
import {Headers, Http, RequestOptions } from "@angular/http";

export class Helpers {

	static API_BASE_HOST = 'http://127.0.0.20:4040/';
	static API_HOST = 'http://127.0.0.20:4040/av1/';
	
	static loadStyles(tag, src) {
		if (Array.isArray(src)) {
			$.each(src, function (k, s) {
				$(tag).append($('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
			});
		} else {
			$(tag).append($('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
		}
	}

	static unwrapTag(element) {
		$(element).removeAttr('appunwraptag').unwrap();
	}

	/**
	 * Set title markup
	 * @param title
	 */
	static setTitle(title) {
		$('.m-subheader__title').text(title);
	}

	/**
	 * Breadcrumbs markup
	 * @param breadcrumbs
	 */
	static setBreadcrumbs(breadcrumbs) {
		if (breadcrumbs) $('.m-subheader__title').addClass('m-subheader__title--separator');

		let ul = $('.m-subheader__breadcrumbs');

		if ($(ul).length === 0) {
			ul = $('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
				.append($('<li/>').addClass('m-nav__item')
					.append($('<a/>').addClass('m-nav__link m-nav__link--icon')
						.append($('<i/>').addClass('m-nav__link-icon la la-home'))));
		}

		$(ul).find('li:not(:first-child)').remove();
		$.each(breadcrumbs, function (k, v) {
			let li = $('<li/>').addClass('m-nav__item')
				.append($('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
					.append($('<span/>').addClass('m-nav__link-text').text(v.text)));
			$(ul).append($('<li/>').addClass('m-nav__separator').text('-')).append(li);
		});
		$('.m-subheader .m-stack__item:first-child').append(ul);
	}

	static setLoading(enable) {
		let body = $('body');
		if (enable) {
			$(body).addClass('m-page--loading-non-block')
		} else {
			$(body).removeClass('m-page--loading-non-block')
		}
	}
	
	static bodyClass(strClass) {
		$('body').attr('class', strClass);
	}

	static jwt() {
		// create authorization header with jwt token
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			let headers = new Headers({ 'Authorization' : currentUser.token });
			return new RequestOptions({ headers: headers });
		}
	}
}