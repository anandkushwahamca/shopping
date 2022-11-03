'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">true</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' : 'data-target="#xs-controllers-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' :
                                            'id="xs-controllers-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' : 'data-target="#xs-injectables-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' :
                                        'id="xs-injectables-links-module-AppModule-1c4021cd012cd049fc414cb402c12568335fb66b51c6192e6a099f8158d15f44a325873bd934233f10ef6586a2afc439d0cfb691895793b2d781a9012b2577ad"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' : 'data-target="#xs-controllers-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' :
                                            'id="xs-controllers-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' : 'data-target="#xs-injectables-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' :
                                        'id="xs-injectables-links-module-OrderModule-57fda59ab576aa7f7eabe79397ea6bdb5f7ad4faa8d071cd3a56627fc706a9e2d849accb6ada135b0ef14507e9cbd50edd6350984d78b7987942363e300cb147"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' : 'data-target="#xs-controllers-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' :
                                            'id="xs-controllers-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' : 'data-target="#xs-injectables-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' :
                                        'id="xs-injectables-links-module-ProductsModule-a2b813d05790257b7c9efbcce25563cc8d5d829623f6070ad0a97b28a1228b247005d92a04b3945daf54048325233e1f79b7396f38ec180bdabe2baa70abd082"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' : 'data-target="#xs-controllers-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' :
                                            'id="xs-controllers-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' : 'data-target="#xs-injectables-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' :
                                        'id="xs-injectables-links-module-UsersModule-573109a181cbd159ef33a7b0d8705da964a1d7d718870d99adfa4d2bd1f5883a9cb80c51573593c7a6d9522f750e9ed4498c543c71e51192b3941cc180582e31"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDto.html" data-type="entity-link" >OrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsDto.html" data-type="entity-link" >ProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileDto.html" data-type="entity-link" >ProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionSerializer.html" data-type="entity-link" >SessionSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDTO.html" data-type="entity-link" >UsersDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticatedGuard.html" data-type="entity-link" >AuthenticatedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});