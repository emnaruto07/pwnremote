# Generated by Django 3.2.10 on 2022-01-08 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20220108_2050'),
    ]

    operations = [
        migrations.AddField(
            model_name='companydetail',
            name='job',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Companydeatils', to='api.job'),
            preserve_default=False,
        ),
    ]
