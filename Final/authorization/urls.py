from django.urls import path
from . import views


urlpatterns = [
    path('sign-in', views.SignIn, name='sign_in'),
    path('sign-up', views.SignUp, name='sign_up'),
    path('sign-out', views.SignOut, name='sign_out'),
]