# Generated by Django 3.2.10 on 2022-01-07 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_sponsoredjobpost'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='sponsored',
            field=models.BooleanField(default=False),
        ),
    ]
