from django.urls import path
from .views import *
from django.contrib.auth import views as viewsAuth

urlpatterns = [
    path('', index, name='index'),
    path('discounts/', discounts, name='discounts'),
    path('discount_delete/<int:pk>/', Discount_delete.as_view(),name='discount_delete'),
    path('discount_update/<int:pk>/', Discount_update.as_view(),name='discount_update'),
    path('discount_create/', Discount_create.as_view(),name='discount_create'),
    path('management/', management, name='management'),
    path('management/add/', CreateProduct.as_view(), name='create-product'),
    path('management/makeup/', management_makeup, name='management-makeup'),
    path('management/care-products/', management_careProducts, name='management-care'),
    path('management/perfumes/', management_perfumes, name='management-perfumes'),
    path('management/presents/', management_presents, name='management-presents'),
    path('management/men-clothes/', management_men_clothes, name='management-men-clothes'),
    path('management/women-clothes/', management_women_clothes, name='management-women-clothes'),
    path('management/girls-clothes/', management_girls_clothes, name='management-girls-clothes'),
    path('management/boys-clothes/', management_boys_clothes, name='management-boys-clothes'),
    path('management/products/', search_products_management, name='search_products_management'),
    path('management/users/', search_users_management, name='search_users_management'),
    path('management/edit/<int:pk>/', UpdateProduct.as_view(), name='update_product'),
    path('management/delete/<int:id>/', delete_product, name='delete_product'),
    path('management/orders/<int:id>/', orders_product, name='orders_product'),
    path('management/delete-user/<int:id>/', delete_user, name='delete-user'),
    path('management/user/<int:id>/', user, name='user'),
    path('register/', SignupViews.as_view(), name='register'),
    path('register/login/', viewsAuth.LoginView.as_view(template_name='auth/login.html'), name='login'),
    path('register/logout/', logoutViews, name='logout'),
    path('register/change_password/', viewsAuth.PasswordChangeView.as_view(template_name='auth/password_change.html', success_url='done/'), name='change-password'),
    path('register/change_password/done/', viewsAuth.PasswordChangeDoneView.as_view(template_name='auth/password_change_done.html'), name='password-change-done'),
    path('search/', Search_products.as_view(), name='search_products'),
    path('makeup/', makeup, name='makeup'),
    path('care-products/', care_products, name='care-products'),
    path('perfumes/', perfumes, name='perfumes'),
    path('presents/', presents, name='presents'),
    path('men-clothes/', men_clothes, name='men_clothes'),
    path('women-clothes/', women_clothes, name='women_clothes'),
    path('girls-clothes/', girls_clothes, name='girls_clothes'),
    path('boys-clothes/', boys_clothes, name='boys_clothes'),
    path('<int:id>/', detail, name='detail'),
    path('orders/', orders, name='orders'),
    path('order-delete/<int:id>/', order_delete, name='order_delete'),
]
