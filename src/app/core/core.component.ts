import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as $ from "jquery";
import { ScriptLoaderService } from './services/script-loader.service';
import { Helpers } from '../utils/helpers'

declare let mApp: any;

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './core.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ScriptLoaderService]
})
export class CoreComponent implements OnInit {
  constructor(private _script: ScriptLoaderService, private _router: Router){
    console.log("Inside core components !");
  }

  ngOnInit() {
    this._script.load('body', 'assets/vendors/base/vendors.bundle.js','assets/demo/default/base/scripts.bundle.js')
			.then(result => {
				Helpers.setLoading(false);
			});
		this._router.events.subscribe((route) => {
			if (route instanceof NavigationStart) {
				(<any>mApp).scrollTop();
				Helpers.setLoading(true);
			}
			if (route instanceof NavigationEnd) {
				Helpers.setLoading(false);
				// content m-wrapper animation
				let animation = 'm-animate-fade-in-up';
				$('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
					$('.m-wrapper').removeClass(animation);
				}).removeClass(animation).addClass(animation);
			}
		});
  }
}
