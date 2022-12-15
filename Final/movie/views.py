from django.shortcuts import render


def Home(request):
    return render(request, 'movie/home.html')