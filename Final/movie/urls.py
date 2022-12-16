from django.urls import path
from . import views


urlpatterns = [
    path('', views.Home, name='home'),
    path('oscar', views.OscarPage, name='oscar'),
    path('movies', views.MoviesPage, name='movies'),
    path('series', views.SeriesPage, name='series'),
    path('cartoons', views.CartoonsPage, name='cartoons'),
    path('cybersport', views.CybersportPage, name='cybersport'),
    path('top5', views.TopPage, name='top5'),
    path('subscription', views.SubscriptionPage, name='subscription'),

    path('detail_product', views.DetailProductPage, name='detail_product'),

    path('profile', views.ProfilePage, name='profile')
]