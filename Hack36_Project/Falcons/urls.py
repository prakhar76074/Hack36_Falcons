from django.urls import path,include
from .views import *
from Falcons import views
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import LoginView,LogoutView

urlpatterns = [
    path('', views.homepage , name = "home"),
    path('people_register/',views.people_register.as_view(), name='people_register'),
     path('police_register/',views.police_register.as_view(), name='police_register'),
     path('login_police/',views.login_request_police, name='login_police'),
     path('login_user/',views.login_request_user, name='login_user'),
     path('logout/',views.logout_view, name='logout'),
     path('officer_dash/',views.officer, name='officer_dash'),
     path('user_dash/',views.user, name='user_dash'),
     path('complaint/',views.complaint, name='complaint'),
     path('chart/',views.chart, name='chart'),

]
