# Generated by Django 3.2.10 on 2022-01-18 21:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_delete_generalfeedback'),
    ]

    operations = [
        migrations.CreateModel(
            name='StripeSessionDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stripe_payment_intent_id', models.CharField(max_length=150)),
                ('amount', models.PositiveBigIntegerField()),
                ('metadata', models.CharField(max_length=150)),
                ('created', models.CharField(max_length=150)),
                ('currency', models.CharField(max_length=30)),
                ('customer', models.CharField(max_length=150)),
                ('payment_type', models.CharField(max_length=150)),
                ('mode', models.CharField(max_length=25)),
                ('payment_status', models.CharField(max_length=30)),
                ('receipt_email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='UpdateJobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('stripe_payment_intent_id', models.CharField(max_length=150)),
            ],
        ),
        migrations.RemoveField(
            model_name='emaillist',
            name='send_time',
        ),
        migrations.AddField(
            model_name='job',
            name='date_until',
            field=models.DateTimeField(null=True),
        ),
        migrations.DeleteModel(
            name='SponsoredJobPost',
        ),
        migrations.AddField(
            model_name='updatejobpost',
            name='job',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='update_post', to='api.job'),
        ),
        migrations.AddField(
            model_name='stripesessiondetails',
            name='job',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='stripeDetails', to='api.job'),
        ),
    ]
