var myTheme = {
    selectors: {
        nav: '#siteNav',
        navToggler: '#siteNavToggler',
        search: '#exe-client-search',
        searchText: '#exe-client-search-text',
        searchToggler: '#searchBarToggler',
    },
    init: function () {
        // Common functions
        if (this.inIframe()) $('body').addClass('in-iframe');
        if (!$('body').hasClass('exe-web-site')) return;
        // Add menu and search bar togglers
        var menuText = $exe_i18n.menu || 'Menú';
        var searchText = $exe_i18n.search || 'Buscar';
        var togglers =
            '\
            <button type="button" id="siteNavToggler" class="toggler" aria-controls="siteNav" aria-expanded="true" aria-label="' +
            menuText +
            '" title="' +
            menuText +
            '">\
                <span class="sr-av">' +
            menuText +
            '</span>\
            </button>\
            <button type="button" id="searchBarToggler" class="toggler" aria-controls="exe-client-search" aria-expanded="false" aria-label="' +
            searchText +
            '" title="' +
            searchText +
            '">\
                <span class="sr-av">' +
            searchText +
            '</span>\
            </button>\
        ';
        $(this.selectors.nav).before(togglers);
        // Check the current NAV status
        var url = window.location.href;
        url = url.split('?');
        if (url.length > 1) {
            if (url[1].indexOf('nav=false') != -1) {
                $('body').addClass('siteNav-off');
                myTheme.params('add');
            }
        }
        this.updateNavState();
        this.updateSearchState(false);
        // Menu toggler
        $(this.selectors.navToggler).on('click', function () {
            if (myTheme.isLowRes()) {
                myTheme.closeSearch();
                if ($('body').hasClass('siteNav-off')) {
                    $('body').removeClass('siteNav-off');
                } else {
                    if ($(myTheme.selectors.nav).isInViewport()) {
                        $('body').addClass('siteNav-off');
                        myTheme.params('add');
                    }
                }
                window.scroll(0, 0);
            } else {
                $('body').toggleClass('siteNav-off');
                myTheme.params(
                    $('body').hasClass('siteNav-off') ? 'add' : 'remove'
                );
            }
            myTheme.updateNavState();
        });
        // Search bar toggler
        $(this.selectors.searchToggler).on('click', function () {
            var bar = $(myTheme.selectors.search);
            if (bar.is(':visible')) {
                myTheme.closeSearch();
            } else {
                if (myTheme.isLowRes()) {
                    $('body').addClass('siteNav-off');
                    myTheme.updateNavState();
                }
                bar.show();
                myTheme.updateSearchState(true);
                $(myTheme.selectors.searchText).focus();
                window.scroll(0, 0);
            }
        });
        if (!this.inIframe()) {
            // Fixed navigation
            $('#siteNav').wrap('<div id="sidebar-nav"></div>');
            myTheme.checkNav();
            $(window).bind('resize', function () {
                myTheme.checkNav();
            });
        }
        // Search form
        this.searchForm();
    },
    inIframe: function () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    },
    searchForm: function () {
        $(this.selectors.searchText).attr('class', 'form-control');
    },
    closeSearch: function () {
        $(this.selectors.search).hide();
        this.updateSearchState(false);
    },
    updateNavState: function () {
        $(this.selectors.navToggler).attr(
            'aria-expanded',
            $('body').hasClass('siteNav-off') ? 'false' : 'true'
        );
    },
    updateSearchState: function (isOpen) {
        $(this.selectors.searchToggler).attr('aria-expanded', isOpen ? 'true' : 'false');
    },
    isLowRes: function () {
        return $(this.selectors.nav).css('float') == 'none';
    },
    checkNav: function () {
        var wrapper = $('#sidebar-nav');
        var navH = $('#siteNav > ul').height(); // Menu height
        navH = navH + 50;
        if (navH < $(window).height()) wrapper.addClass('fixed');
        else wrapper.removeClass('fixed');
    },
    param: function (e, act) {
        if (act == 'add') {
            var ref = e.href;
            var con = '?';
            if (ref.indexOf('.html?') != -1) con = '&';
            var param = 'nav=false';
            if (ref.indexOf(param) == -1) {
                ref += con + param;
                e.href = ref;
            }
        } else {
            // This will remove all params
            var ref = e.href;
            ref = ref.split('?');
            e.href = ref[0];
        }
    },
    params: function (act) {
        $('.nav-buttons a').each(function () {
            myTheme.param(this, act);
        });
    },
};
$(function () {
    myTheme.init();
});
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
