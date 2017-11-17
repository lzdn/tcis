# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-15 03:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True, verbose_name='项目名称')),
                ('active', models.BooleanField(default=True, verbose_name='是否有效')),
                ('start_date', models.DateField(blank=True, null=True, verbose_name='开始时间')),
                ('end_date', models.DateField(blank=True, null=True, verbose_name='结束时间')),
                ('parent_left', models.IntegerField(blank=True, null=True, unique=True, verbose_name='左')),
                ('parent_right', models.IntegerField(blank=True, null=True, unique=True, verbose_name='右')),
                ('description', models.TextField(blank=True, null=True, verbose_name='项目描述')),
            ],
            options={
                'verbose_name': '项目',
                'verbose_name_plural': '项目管理',
                'db_table': 'project',
            },
        ),
        migrations.CreateModel(
            name='ProjectMeeting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectMember',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True, verbose_name='是否有效')),
            ],
            options={
                'verbose_name': '项目成员',
                'verbose_name_plural': '项目成员管理',
                'db_table': 'project_member',
            },
        ),
        migrations.CreateModel(
            name='ProjectTask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True, verbose_name='项目任务名称')),
                ('active', models.BooleanField(default=True, verbose_name='是否有效')),
                ('description', models.TextField(blank=True, null=True, verbose_name='任务描述')),
                ('state', models.CharField(choices=[('draft', '草稿'), ('confirm', '已确认'), ('appointed', '已指派'), ('processing', '处理中'), ('hold', '挂起'), ('done', '完成')], default='draft', max_length=20, verbose_name='状态')),
                ('need_time', models.FloatField(default=1, verbose_name='估计时长(h)')),
                ('start_time', models.DateTimeField(blank=True, null=True, verbose_name='开始时间')),
                ('end_time', models.DateTimeField(blank=True, null=True, verbose_name='计划完成时间')),
                ('real_end_time', models.DateTimeField(blank=True, null=True, verbose_name='实际完成时间')),
                ('level', models.IntegerField(choices=[(1, '非常紧急'), (2, '紧急'), (3, '一般'), (4, '次要')], default=3, verbose_name='级别')),
            ],
            options={
                'verbose_name': '项目任务',
                'verbose_name_plural': '项目任务管理',
                'db_table': 'project_task',
            },
        ),
        migrations.CreateModel(
            name='ProjectTaskHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True, verbose_name='任务描述')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='project.ProjectTask', verbose_name='任务')),
            ],
            options={
                'verbose_name': '任务历史',
                'verbose_name_plural': '任务历史管理',
                'db_table': 'project_task_history',
            },
        ),
        migrations.CreateModel(
            name='ProjectTaskType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, unique=True, verbose_name='任务类型')),
            ],
        ),
    ]
