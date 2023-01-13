from uuid import uuid4

from django.db import models


class Dev(models.Model):
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    globalEarnings = models.IntegerField(default=0)

    def __str__(self):
        return self.username

    class JSONAPIMeta:
        resource_name = "user"


class Client(models.Model):

    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    mail = models.CharField(max_length=200, unique=True)
    Tel = models.CharField(max_length=200)

    def __str__(self):
        return self.lastname

    class JSONAPIMeta:
        resource_name = "client"


class Invoice(models.Model):
    hour_spend = models.IntegerField(default=0)
    invoice_value = models.FloatField(default=0)
    depth:1
    
    class JSONAPIMeta:
        resource_name = "Invoice"


class Project(models.Model):
    name = models.CharField(max_length=200,unique=True)
    description = models.CharField(max_length=200)
    technology = models.CharField(max_length=200)
    isOver = models.BooleanField(default=False)
    dev = models.ForeignKey(to=Dev, on_delete=models.CASCADE)
    client = models.ForeignKey(to=Client, on_delete=models.CASCADE)
    invoice = models.OneToOneField(Invoice, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name