import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as $ from "jquery";

declare let mLayout: any;

@Component({
    selector: "app-left-sidebar",
    templateUrl: "./left-sidebar.component.html",
    encapsulation: ViewEncapsulation.None
})

export class LeftSideBarComponent implements OnInit, AfterViewInit {

    constructor()  {

    }

    ngOnInit()  {

    }

    ngAfterViewInit()  {
        mLayout.initAside();
        let menu = (<any>$('#m_aside_left')).mmenu(); 
        let item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        (<any>$(menu).data('menu')).setActiveItem(item);
    }
}