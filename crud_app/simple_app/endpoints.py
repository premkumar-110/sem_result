import csv
import json
import logging
from flask import jsonify, request, send_file
import random
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
from pandas.tseries.offsets import DateOffset
import pymongo
from statsmodels.tsa.stattools import adfuller
from statsmodels.graphics.tsaplots import plot_acf
import statsmodels.api as sm
from statsmodels.tsa.arima.model import ARIMA
from werkzeug.security import check_password_hash
import smtplib
from bson import ObjectId
server=smtplib.SMTP('smtp.gmail.com',587)
server.starttls()

client=pymongo.MongoClient('mongodb://localhost:27017')

db=client['student']
user_collection=db['result']
students_details=[]
a=user_collection.find()
for i in a:
    students_details.append(i)

def project_api_routes(endpoints):
    @endpoints.route('/adminlogin', methods=['POST'])
    def adminlogin():
        mail = request.json.get('regno')
        password = request.json.get('password')
        user = user_collection.find_one({'name':mail, 'password': password})
        print(user)
        if user:
            return jsonify({'regno':True})
        else:
            return jsonify({'message': 'Invalid email or password'})
    @endpoints.route('/login', methods=['POST'])
    def login():
        mail = request.json.get('regno')
        password = request.json.get('password')
        user = user_collection.find_one({'regno': str(mail).lower(), 'password': password})
        p=0
        count=0
        failed=[]
        if(user['s1'])=='F':
            count+=1
            failed.append('SUBJECT1')
        if(user['s2'])=='F':
            count+=1
            failed.append('SUBJECT2')
        if(user['s3'])=='F':
            count+=1
            failed.append('SUBJECT3')
        if(user['s4'])=='F':
            count+=1
            failed.append('SUBJECT4')
        if(user['s5'])=='F':
            count+=1
            failed.append('SUBJECT5')
        if(user['s6'])=='F':
            count+=1
            failed.append('SUBJECT6')
        if(user['s7'])=='F':
            count+=1
            failed.append('SUBJECT7')
        if(user['s8'])=='F':
            count+=1
            failed.append('SUBJECT8')
        if(user['s9'])=='F':
            count+=1
            failed.append('SUBJECT9')
        json_data = json.dumps(failed) 
        print(user)
        if user:
            return jsonify({'failed':json_data, 'regno': user['regno'],'password':user['password'],'count':count,'s1':user['s1'],
                            's2':user['s2'],'s3':user['s3'],'s4':user['s4'],'s5':user['s5'],'s6':user['s6'],'s7':user['s7'],'s8':user['s8'],'s9':user['s9'],'name':user['name'],
                            'photocopy':user['photocopy'],'revaluation':user['revaluation']})
        else:
            return jsonify({'message': 'Invalid email or password'})
        
    
    @endpoints.route('/register', methods=['POST'])
    def register():
        reg = request.json.get('regno')
        photo = request.json.get('photo')
        subjects = request.json.get('subjects')
        filter={"regno": reg}
        update = {"$set": {"photocopy": photo,'photocopy_subjects': subjects}}
        result=user_collection.update_one(filter,update)
        print(result)
        response={'status':photo}
        return jsonify(response)
    
    @endpoints.route('/register1', methods=['POST'])
    def register1():
        reg1 = request.json.get('regno')
        photo1 = request.json.get('photo')
        subjects = request.json.get('subjects')
        filter={"regno": reg1}
        update = {"$set": {"revaluation": photo1,'revaluation_subjects': subjects}}
        result=user_collection.update_one(filter,update)
        print(result)
        response={'status':photo1}
        return jsonify(response)

    @endpoints.route('/sendotp', methods=['POST'])
    def sendotp():
        server=smtplib.SMTP('smtp.gmail.com',587)
        server.starttls()
        server.login('websitehostformysite@gmail.com','ynyhjzjylrfdwcjf')
        otp=''.join([str(random.randint(0,9)) for i in range(6)])
        msg="Your OTP is "+str(otp)+".\n It is auto generated mail don't reply for this message."
        server.sendmail('websitehostformysite@gmail.com','scpprem006@gmail.com',msg)
        server.quit()

        response={'otp':otp}
        return jsonify(response)
     
    @endpoints.route('/file_upload',methods=['POST'])
    def file_upload():
        resp = {}
        req = request.form
        studentfile = request.files.get('file')
        file=pd.read_csv(studentfile)
        print(file.head())
        for index, row in file.iterrows():
            doc = {}
            for col in file.columns:
                doc[col] = row[col]
            user_collection.insert_one(doc)
        response={'status':True}
        return jsonify(response)
    @endpoints.route('/get_details',methods=['POST'])
    def get_details():
        dept = request.json.get('dept')
        students = user_collection.find({
            "$or": [
                {"s1": "F"}, {"s2": "F"},
                {"s3": "F"}, {"s4": "F"},
                {"s5": "F"}, {"s6": "F"},
                {"s7": "F"}, {"s8": "F"},
                {"s9": "F"}
            ]
        })
        student_list = []
        for student in students:
            student_list.append({
                'regno': student['regno'],
                'name': student['name'],
                's1': student['s1'],
                's2': student['s2'],
                's3': student['s3'],
                's4': student['s4'],
                's5': student['s5'],
                's6': student['s6'],
                's7': student['s7'],
                's8': student['s8'],
                's9': student['s9'],
                'photocopy':student['photocopy'],
                'revaluation':student['revaluation']
            })
        print(student_list)
        return jsonify(student_list)

    return endpoints
