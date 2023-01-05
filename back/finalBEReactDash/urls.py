"""finalBEReactDash URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_extensions.routers import ExtendedSimpleRouter

from api import views
from api.views import InvoiceViewSet, ProjectViewSet, ClientViewSet, DevViewSet, AuthViewSet, DevProjectViewSet, \
    DevClientProjectInvoiceViewSet, GetClientByDevViewSet, CreateClientView, CreateProjectView, GetInvoiceByDevViewSet

router = ExtendedSimpleRouter()

router.register(r'auth', AuthViewSet)
router.register(r'fetchproject', DevProjectViewSet)
router.register(r'fetchuserclient', GetClientByDevViewSet)
router.register(r'fetchuserdata', DevClientProjectInvoiceViewSet)

router.register(r'fetchinvoices',GetInvoiceByDevViewSet)


router.register(r'devs', DevViewSet).register(r'projects', ProjectViewSet, basename='project-group',
                                              parents_query_lookups=['client_id'])

router.register(r'clients', ClientViewSet).register(r'project', ProjectViewSet, basename='client-project',
                                                    parents_query_lookups=['id'])
router.register(r'projects', ProjectViewSet).register(r'dev', DevViewSet, basename='project-dev',
                                                      parents_query_lookups=['id'])
router.register(r'projects', ProjectViewSet).register(r'invoice', InvoiceViewSet, basename='project-invoice',
                                                      parents_query_lookups=['id'])
router.register(r'projects', ProjectViewSet).register(r'client', ClientViewSet, basename='project-client',
                                                      parents_query_lookups=['id'])
router.register(r'invoices', InvoiceViewSet).register(r'project', ProjectViewSet, basename='invoice-project',
                                                      parents_query_lookups=['id'])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api/client/create',CreateClientView.as_view()),
    path('api/project/create',CreateProjectView.as_view()),


]