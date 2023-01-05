from rest_framework import serializers, request

from api.models import *


class dev_serializer(serializers.HyperlinkedModelSerializer):
    dev_id = models.IntegerField(primary_key=True)

    class Meta:
        model = Dev
        fields = ['id', 'firstname', 'lastname', 'username', 'password', 'price', 'globalEarnings']


# create a serializer regrouping dev client project and invoice from dev


class client_serializer(serializers.ModelSerializer):

    firstname = serializers.CharField()
    lastname = serializers.CharField()
    mail = serializers.CharField()
    Tel = serializers.CharField()
    context = {'request': request}
    class Meta:
        model = Client
        fields = ['id', 'firstname', 'lastname', 'mail', 'Tel']

    # function to create a client

class invoice_serializer(serializers.HyperlinkedModelSerializer):
    invoice_id = models.IntegerField(primary_key=True)

    class Meta:
        model = Invoice
        fields = 'id', 'hour_spend', 'invoice_value'
        depth = 1

# create a project serializer without url

class project_serializer(serializers.ModelSerializer):
    project_id = models.IntegerField(primary_key=True)

    class Meta:
        model = Project
        fields = '__all__'
        extra_kwargs = {'invoice': {'read_only': True}}



class dev_project_serializer(serializers.HyperlinkedModelSerializer):
    dev = dev_serializer
    project = project_serializer

    class Meta:
        model = Project
        fields = ['dev', 'project']


# Create a serializer regrouping dev client
class dev_client_project_invoice_serializer(serializers.HyperlinkedModelSerializer):
    dev = dev_serializer
    client = client_serializer
    invoice = invoice_serializer
    project = project_serializer

    # make me see the id of the dev and client

    class Meta:
        model = Project
        fields = '__all__'
        depth = 2


# get all clients from a dev id
class dev_client_serializer(serializers.HyperlinkedModelSerializer):
    dev = dev_serializer
    client = client_serializer

    class Meta:
        model = Project
        fields = ['dev', 'client']
        depth = 2


# make a serializer regrouping dev client project and invoice from client
class client_project_invoice_serializer(serializers.HyperlinkedModelSerializer):
    project = project_serializer
    client = client_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping client project and invoice from invoice
class invoice_project_client_serializer(serializers.HyperlinkedModelSerializer):
    invoice = invoice_serializer
    project = project_serializer
    client = client_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping client project and invoice from project
class project_client_invoice_serializer(serializers.HyperlinkedModelSerializer):
    project = project_serializer
    client = client_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping dev project and invoice from project
class project_dev_invoice_serializer(serializers.HyperlinkedModelSerializer):
    project = project_serializer
    dev = dev_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping dev project and invoice from dev
class dev_project_invoice_serializer(serializers.HyperlinkedModelSerializer):
    dev = dev_serializer
    project = project_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


class project_dev_client_invoice_serializer(serializers.HyperlinkedModelSerializer):
    project = project_serializer
    dev = dev_serializer
    client = client_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping client project and invoice from client
class client_project_invoice_serializer(serializers.HyperlinkedModelSerializer):
    project = project_serializer
    client = client_serializer
    invoice = invoice_serializer

    class Meta:
        model = Project
        fields = '__all__'


# make a serializer regrouping client project and invoice from invoice
class invoice_project_client_serializer(serializers.HyperlinkedModelSerializer):
    invoice = invoice_serializer
    project = project_serializer
