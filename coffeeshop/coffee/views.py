from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def CoffeShop(request):
    return render(request, "coffee/home.html")
