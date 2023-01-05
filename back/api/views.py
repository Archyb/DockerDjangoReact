from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.decorators import api_view
from django.http.request import HttpRequest
from rest_framework.response import Response

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin

from .serializers import *



#create Dev api view for crud
class DevViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = dev_serializer
    queryset = Dev.objects.all()
    lookup_field = 'id'

class AuthViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Dev.objects.all()
    serializer_class = dev_serializer

    def get_queryset(self):

        username = self.request.query_params.get('username', None)
        password = self.request.query_params.get('password', None)
        if username is not None and password is not None:
            return Dev.objects.filter(username=username, password=password)
        return Dev.objects.none()
    #make methode to update dev


class DevProjectViewSet(ModelViewSet):
    queryset = Dev.objects.all().select_related('dev')
    serializer_class = dev_serializer


class ProjectViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = project_serializer

#make a get request filter by dev id
    def get_queryset(self):
        dev_id = self.request.query_params.get('user', None)
        if dev_id is not None:
            return Project.objects.filter(dev_id=dev_id)
        return Project.objects.all()

class ClientViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = client_serializer
    #make a post request to create a client




class InvoiceViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = invoice_serializer


class DevClientsViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializers = client_serializer
    def get_queryset(self):
        return Project.objects.filter(dev_id=self.kwargs['pk'])


class DevProjectViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = project_serializer

    def get_queryset(self):
        dev_id = self.request.query_params.get('dev', None)
        if dev_id is not None:
            return Project.objects.filter(dev_id=dev_id)
        return Project.objects.all()

#mave aview from ddev_client_project_invoice_serializer filter by dev id
class DevClientProjectInvoiceViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = dev_client_project_invoice_serializer

    def get_queryset(self):
        dev_id = self.request.query_params.get('dev', None)
        if dev_id is not None:
            return Project.objects.filter(dev_id=dev_id)
        return Project.objects.all()


#get all project from a dev view
class GetClientByDevViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = client_serializer

    def get_queryset(self):
        clients=Client.objects.all()
        dev_id = self.request.query_params.get('dev', None)
        if dev_id is not None:
            #get all client from a dev
            projects = Project.objects.filter(dev_id=dev_id)
            #get all client from a dev
            clients = Client.objects.filter(project__in=projects)
            return clients
        return Client.objects.none()


@api_view(['POST'])
def create_client(request):
    serializer = client_serializer(data=request.data)
    serializer_context = {
        'request': HttpRequest,
    }
    context = {'request': request}
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CreateClientView(generics.CreateAPIView):
    serializer_class = client_serializer
    queryset = Client.objects.all()

class CreateProjectView(generics.CreateAPIView):
    serializer_class = project_serializer
    queryset = Project.objects.all()

    #create invoice and insert it in the project
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        invoice = Invoice.objects.create(hour_spend=0, invoice_value=0)
        serializer.validated_data['invoice'] = invoice
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateInvoiceView(generics.CreateAPIView):
    serializer_class = invoice_serializer
    queryset = Invoice.objects.all()

#get all invoice from a dev
class GetInvoiceByDevViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = invoice_serializer

    def get_queryset(self):
        dev_id = self.request.query_params.get('dev', None)
        if dev_id is not None:
            projects = Project.objects.filter(dev_id=dev_id)
            invoices = Invoice.objects.filter(project__in=projects)
            return invoices
        return Invoice.objects.none()