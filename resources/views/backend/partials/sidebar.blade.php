<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <div class="nav-link">
          <div class="profile-image">
            <img src="{{asset('asset/backend/images/faces/face5.jpg')}}" alt="image"/>
          </div>
          <div class="profile-name">
            <p class="name">
              Welcome Jane
            </p>
            <p class="designation">
              Super Admin
            </p>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../../index-2.html">
          <i class="fa fa-home menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../widgets.html">
          <i class="fa fa-puzzle-piece menu-icon"></i>
          <span class="menu-title">Widgets</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
          <i class="fab fa-trello menu-icon"></i>
          <span class="menu-title">Page Layouts</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="page-layouts">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="boxed-layout.html">Boxed</a></li>
            <li class="nav-item"> <a class="nav-link" href="rtl-layout.html">RTL</a></li>
            <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="horizontal-menu.html">Horizontal Menu</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item d-none d-lg-block">
        <a class="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
          <i class="fas fa-columns menu-icon"></i>
          <span class="menu-title">Sidebar Layouts</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="sidebar-layouts">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="compact-menu.html">Compact menu</a></li>
            <li class="nav-item"> <a class="nav-link" href="sidebar-collapsed.html">Icon menu</a></li>
            <li class="nav-item"> <a class="nav-link" href="sidebar-hidden.html">Sidebar Hidden</a></li>
            <li class="nav-item"> <a class="nav-link" href="sidebar-hidden-overlay.html">Sidebar Overlay</a></li>
            <li class="nav-item"> <a class="nav-link" href="sidebar-fixed.html">Sidebar Fixed</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="far fa-compass menu-icon"></i>
          <span class="menu-title">Basic UI Elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../ui-features/accordions.html">Accordions</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/buttons.html">Buttons</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/badges.html">Badges</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/breadcrumbs.html">Breadcrumbs</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/dropdowns.html">Dropdowns</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/modals.html">Modals</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/progress.html">Progress bar</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/pagination.html">Pagination</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/tabs.html">Tabs</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/typography.html">Typography</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/tooltips.html">Tooltips</a></li>
          </ul>
          </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
          <i class="fas fa-clipboard-list menu-icon"></i>
          <span class="menu-title">Advanced Elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-advanced">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../ui-features/dragula.html">Dragula</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/clipboard.html">Clipboard</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/context-menu.html">Context menu</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/slider.html">Sliders</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/carousel.html">Carousel</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/colcade.html">Colcade</a></li>
            <li class="nav-item"> <a class="nav-link" href="../ui-features/loaders.html">Loaders</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
          <i class="fab fa-wpforms menu-icon"></i>
          <span class="menu-title">Form elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="form-elements">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"><a class="nav-link" href="../forms/basic_elements.html">Basic Elements</a></li>                
            <li class="nav-item"><a class="nav-link" href="../forms/advanced_elements.html">Advanced Elements</a></li>
            <li class="nav-item"><a class="nav-link" href="../forms/validation.html">Validation</a></li>
            <li class="nav-item"><a class="nav-link" href="../forms/wizard.html">Wizard</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
          <i class="fas fa-pen-square menu-icon"></i>
          <span class="menu-title">Editors</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="editors">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"><a class="nav-link" href="../forms/text_editor.html">Text editors</a></li>
            <li class="nav-item"><a class="nav-link" href="../forms/code_editor.html">Code editors</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
          <i class="fas fa-chart-pie menu-icon"></i>
          <span class="menu-title">Charts</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="charts">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../charts/chartjs.html">ChartJs</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/morris.html">Morris</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/flot-chart.html">Flot</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/google-charts.html">Google charts</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/sparkline.html">Sparkline js</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/c3.html">C3 charts</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/chartist.html">Chartists</a></li>
            <li class="nav-item"> <a class="nav-link" href="../charts/justGage.html">JustGage</a></li>
          </ul>
          </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
          <i class="fas fa-table menu-icon"></i>
          <span class="menu-title">Tables</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="tables">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../tables/basic-table.html">Basic table</a></li>
            <li class="nav-item"> <a class="nav-link" href="../tables/data-table.html">Data table</a></li>
            <li class="nav-item"> <a class="nav-link" href="../tables/js-grid.html">Js-grid</a></li>
            <li class="nav-item"> <a class="nav-link" href="../tables/sortable-table.html">Sortable table</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ui-features/popups.html">
          <i class="fas fa-minus-square menu-icon"></i>
          <span class="menu-title">Popups</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../ui-features/notifications.html">
          <i class="fas fa-bell menu-icon"></i>
          <span class="menu-title">Notifications</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
          <i class="fa fa-stop-circle menu-icon"></i>
          <span class="menu-title">Icons</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="icons">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../icons/flag-icons.html">Flag icons</a></li>
            <li class="nav-item"> <a class="nav-link" href="../icons/font-awesome.html">Font Awesome</a></li>
            <li class="nav-item"> <a class="nav-link" href="../icons/simple-line-icon.html">Simple line icons</a></li>
            <li class="nav-item"> <a class="nav-link" href="../icons/themify.html">Themify icons</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
          <i class="fas fa-map-marker-alt menu-icon"></i>
          <span class="menu-title">Maps</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="maps">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../maps/mapeal.html">Mapeal</a></li>
            <li class="nav-item"> <a class="nav-link" href="../maps/vector-map.html">Vector Map</a></li>
            <li class="nav-item"> <a class="nav-link" href="../maps/google-maps.html">Google Map</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
          <i class="fas fa-window-restore menu-icon"></i>
          <span class="menu-title">User Pages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../samples/login.html"> Login </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/login-2.html"> Login 2 </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/register.html"> Register </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/register-2.html"> Register 2 </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/lock-screen.html"> Lockscreen </a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
          <i class="fas fa-exclamation-circle menu-icon"></i>
          <span class="menu-title">Error pages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="error">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../samples/error-404.html"> 404 </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/error-500.html"> 500 </a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
          <i class="fas fa-file menu-icon"></i>
          <span class="menu-title">General Pages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="general-pages">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../samples/blank-page.html"> Blank Page </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/profile.html"> Profile </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/faq.html"> FAQ </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/faq-2.html"> FAQ 2 </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/news-grid.html"> News grid </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/timeline.html"> Timeline </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/search-results.html"> Search Results </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/portfolio.html"> Portfolio </a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#apps" aria-expanded="false" aria-controls="apps">
          <i class="fas fa-briefcase menu-icon"></i>
          <span class="menu-title">Apps</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="apps">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../apps/email.html"> Email </a></li>
            <li class="nav-item"> <a class="nav-link" href="../apps/calendar.html"> Calendar </a></li>
            <li class="nav-item"> <a class="nav-link" href="../apps/todo.html"> Todo </a></li>
            <li class="nav-item"> <a class="nav-link" href="../apps/gallery.html"> Gallery </a></li>
          </ul>`
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
          <i class="fas fa-shopping-cart menu-icon"></i>
          <span class="menu-title">E-commerce</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="e-commerce">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="../samples/invoice.html"> Invoice </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/pricing-table.html"> Pricing Table </a></li>
            <li class="nav-item"> <a class="nav-link" href="../samples/orders.html"> Orders </a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../documentation.html">
          <i class="far fa-file-alt menu-icon"></i>
          <span class="menu-title">Documentation</span>
        </a>
      </li>
    </ul>
  </nav>