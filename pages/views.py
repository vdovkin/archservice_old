from django.shortcuts import render, redirect

from user_request.choices import (
    grid_choices,
    load1_choices,
    load2_choices,
    selected_choices,
)


def index(request):

    context = {
        "grid_choices": grid_choices,
        "load1_choices": load1_choices,
        "load2_choices": load2_choices,
        "selected_choices": selected_choices,
    }
    return render(request, "pages/index.html", context)


def about(request):
    return render(request, "pages/about.html")


def contacts(request):
    return render(request, "pages/contacts.html")


def results(request):
    if request.method == "POST":
        return render(request, "pages/results.html")
    else:
        return redirect("index")
