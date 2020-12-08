from django.db import models


class Beam(models.Model):
    title = models.CharField(max_length=10)
    h = models.DecimalField(max_digits=5, decimal_places=1)
    b = models.DecimalField(max_digits=5, decimal_places=1)
    s = models.DecimalField(max_digits=3, decimal_places=1)
    t = models.DecimalField(max_digits=3, decimal_places=1)
    r_1 = models.DecimalField(max_digits=3, decimal_places=1)
    r_2 = models.DecimalField(max_digits=3, decimal_places=1)
    A = models.DecimalField(max_digits=6, decimal_places=2)
    P = models.DecimalField(max_digits=5, decimal_places=2)
    Iy = models.DecimalField(max_digits=10, decimal_places=3)
    Wy = models.DecimalField(max_digits=10, decimal_places=3)
    Sy = models.DecimalField(max_digits=10, decimal_places=3)
    i_y = models.DecimalField(max_digits=4, decimal_places=1)
    Iz = models.DecimalField(max_digits=10, decimal_places=3)
    Wz = models.DecimalField(max_digits=10, decimal_places=3)
    Sz = models.DecimalField(max_digits=10, decimal_places=3)
    i_z = models.DecimalField(max_digits=4, decimal_places=1)

    def __str__(self):
        return "Двотавр " + str(self.title)
