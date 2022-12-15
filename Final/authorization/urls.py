from django.urls import path


urlpatterns = [
    path('authorization/', views.SignIn, name='sign_in')
]