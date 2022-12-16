from django.shortcuts import render


def Home(request):
    return render(request, 'movie/home.html')


def OscarPage(request):
    return render(request, 'movie/oscar.html')


def MoviesPage(request):
    return render(request, 'movie/movies.html')


def SeriesPage(request):
    return render(request, 'movie/series.html')


def CartoonsPage(request):
    return render(request, 'movie/cartoons.html')


def TopPage(request):
    return render(request, 'movie/top-5.html')


def SubscriptionPage(request):
    return render(request, 'movie/aboutsubscription.html')


def CybersportPage(request):
    return render(request, 'movie/esports.html')


def DetailProductPage(request):
    return render(request, 'movie/watch-product.html')


def ProfilePage(request):
    return render(request, 'movie/profile.html')