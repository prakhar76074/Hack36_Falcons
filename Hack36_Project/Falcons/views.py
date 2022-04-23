from django.shortcuts import render , redirect, HttpResponse
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth import authenticate,login as authLogin
from .forms import policeSignUpForm,peopleSignUpForm
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.template.loader import render_to_string  
from django.utils.encoding import force_bytes, force_text  
from django.views.generic import CreateView
#from .tokens import account_activation_token  
from django.contrib.auth.models import User  
from django.contrib.sites.shortcuts import get_current_site  
from django.core.mail import EmailMessage  
import requests

def homepage(request):
     return render(request,"index.html")

class people_register(CreateView):
    model = User
    form_class = peopleSignUpForm
    template_name = '../templates/signup.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        context={'user':user}
        return redirect('/user_dash/')

class police_register(CreateView):
    model = User
    form_class = policeSignUpForm
    template_name = '../templates/signup.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/officer_dash/')

def login_request_police(request):
    if request.method=='POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None :
                login(request,user)
                return redirect('/officer_dash/')
            else:
                messages.error(request,"Invalid username or password")
        else:
                messages.error(request,"Invalid username or password")
    return render(request, '../templates/signin.html',
    context={'form':AuthenticationForm()})

def login_request_user(request):
    if request.method=='POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None :
                login(request,user)
                return redirect('/user_dash/')
            else:
                messages.error(request,"Invalid username or password")
        else:
                messages.error(request,"Invalid username or password")
    return render(request, '../templates/signin.html',
    context={'form':AuthenticationForm()})


def logout_view(request):
    logout(request)
    return redirect('/')

def chart(request):
    return render(request,"chart.html")    

def officer(request):
    return render(request,"officer_dash.html")    

def user(request):
    return render(request,"user_dash.html")    

def complaint(request):
    return render(request,"complaint.html")    
