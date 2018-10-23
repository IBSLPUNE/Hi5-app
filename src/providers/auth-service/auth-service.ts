import { App } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
      // public serverIP ='http://192.168.42.134:3000';  // sir local
     //  public serverIP ='http://192.168.15.205:3002';  // local
      // public serverIP ='http://192.168.19.176:3000'; //vishal
         public serverIP ='http://13.229.157.255'; live
      // public serverIP ='http://192.168.22.88:3002'; //tanuja
      // public serverIP ='http://192.168.14.135:3000'; //santosh
       // public serverIP ='http://192.168.225.35:3000'; //santosh

    
// public apiUrl_user_auths = this.serverIP + '/api/community_apis/';   //api server
   public apiUrl_user_auths = this.serverIP + '/api/contact_library_apis/';   //api server


  constructor(public http: Http, public _app: App) {
    //console.log('Hello AuthService Provider');
       
  }
    login(credentials) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
            body.append('email', credentials.username);
            body.append('password', credentials.password);

            this.http.post(this.apiUrl_user_auths + 'user_sign_in', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    Logout() {
        localStorage.removeItem('agent_id');
        this._app.getRootNavs()[0].setRoot(LoginPage);
    }
    Updatelogin(credentials) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
             body.append('employee_id', credentials.employee_id);
             body.append('password', credentials.password);
             body.append('new_password', credentials.new_password);
              body.append('confirm_password', credentials.confirm_password);

            this.http.post(this.apiUrl_user_auths + 'update_profile', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getCountyType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'contries_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getStateType(county_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'state_list?country_id=' + county_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDistrictType(state_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'districts_list?state_id=' + state_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getBloodGroupType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'blood_group_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAllEventType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_event_type_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    

     geteventdetails(agent_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'event_detail_list?agent_id=' + agent_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getalleventdetails(agent_id, reporting_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_event_detail_list?agent_id=' + agent_id + '&reporting_id=' + reporting_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    getcountdetails(agent_id, id){
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'mobile_no_count?member_id=' + agent_id + '&event_detail_id=' + id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    

     getAllAgencyType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_agency_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getCompanyType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'company_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    
    getmemberdetails(reporting_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'member_list?reporting_id=' + reporting_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getpurticularmemberdetails(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'purticular_agent?agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getCreateUser(reporting_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_agent_list?reporting_id=' + reporting_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     deactiveUser(agent_id, user_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'cancel_user?agent_id=' + agent_id + '&user_id=' + user_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
      activeUser(agent_id, user_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'active_user?agent_id=' + agent_id + '&user_id=' + user_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     saveAgencyData(AgencyReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
             
            body.append('county_type', AgencyReq.county_type);
            body.append('state_type', AgencyReq.state_type);
            body.append('district_type', AgencyReq.district_type);
            body.append('code', AgencyReq.code);
            body.append('name', AgencyReq.name);
            body.append('full_name', AgencyReq.full_name);
            body.append('address', AgencyReq.address);
            body.append('pin_code', AgencyReq.pin_code);
            body.append('city', AgencyReq.city);
            body.append('contact_no', AgencyReq.contact_no);
            body.append('email', AgencyReq.email);
            body.append('website', AgencyReq.website);
            body.append('company_type', AgencyReq.company_type);
            body.append('status', AgencyReq.status);

            this.http.post(this.apiUrl_user_auths + 'agency_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveMemberData(MemberReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', MemberReq.code);
            body.append('first_name', MemberReq.first_name);
            body.append('middle_name', MemberReq.middle_name);
            body.append('last_name', MemberReq.last_name);
            body.append('gender', MemberReq.gender); 
            body.append('email', MemberReq.email);
            body.append('official_no', MemberReq.official_no);
            body.append('personal_no', MemberReq.personal_no);
            body.append('emergency_no', MemberReq.emergency_no);
            body.append('blood_type', MemberReq.blood_type);
            body.append('selectedDate', MemberReq.selectedDate);
            body.append('address', MemberReq.address);
            body.append('pin_code', MemberReq.pin_code);
            body.append('county_type', MemberReq.county_type);
            body.append('state_type', MemberReq.state_type);
            body.append('district_type', MemberReq.district_type);
            body.append('city', MemberReq.city);
            body.append('agency_type', MemberReq.agency_type);
            body.append('status', MemberReq.status);

            this.http.post(this.apiUrl_user_auths + 'member_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveEventData(EventReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
        
           // body.append('county_type', EventReq.county_type);
           // body.append('state_type', EventReq.state_type);
           // body.append('district_type', EventReq.district_type);
           // body.append('select_type', EventReq.select_type);
           
            body.append('event_type', EventReq.event_type);
            body.append('code', EventReq.code);
            body.append('data_collections', EventReq.data_collections);
            body.append('name', EventReq.name);
            body.append('discription', EventReq.discription);
            body.append('selectedDate', EventReq.current_date);
            body.append('place', EventReq.place);
            body.append('town', EventReq.town);
            body.append('village', EventReq.village);
            body.append('city_id', EventReq.city_type);
            body.append('member_type', EventReq.member_type);
            body.append('agency_type', EventReq.agency_type);
            
          

            this.http.post(this.apiUrl_user_auths + 'event_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveContactList(contactlist) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
            body.append('event_id', contactlist.event_id);
            body.append('agent_id', contactlist.agent_id);
            body.append('agency_id', contactlist.agency_id);
            body.append('contact_name', contactlist.name);
            body.append('gender_type', contactlist.gender_type);
            body.append('contact', contactlist.contact);
            body.append('contact_name1', contactlist.name1);
            body.append('gender_type1', contactlist.gender_type1);
            body.append('contact1', contactlist.contact1);
            body.append('contact_name2', contactlist.name2);
            body.append('gender_type2', contactlist.gender_type2);
            body.append('contact2', contactlist.contact2);
            body.append('contact_name3', contactlist.name3);
            body.append('gender_type3', contactlist.gender_type3);
            body.append('contact3', contactlist.contact3);
            body.append('contact_name4', contactlist.name4);
            body.append('gender_type4', contactlist.gender_type4);
            body.append('contact4', contactlist.contact4);

            this.http.post(this.apiUrl_user_auths + 'create_contact_list_requests', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveAgencyRequest(MemberReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', MemberReq.code);
            body.append('first_name', MemberReq.first_name);
            body.append('middle_name', MemberReq.middle_name);
            body.append('last_name', MemberReq.last_name);
            body.append('gender', MemberReq.gender); 
            body.append('email', MemberReq.email);
            body.append('official_no', MemberReq.official_no);
            body.append('personal_no', MemberReq.personal_no);
            body.append('emergency_no', MemberReq.emergency_no);
            body.append('blood_type', MemberReq.blood_type);
            body.append('selectedDate', MemberReq.selectedDate);
            body.append('address', MemberReq.address);
            body.append('pin_code', MemberReq.pin_code);
            body.append('county_type', MemberReq.county_type);
            body.append('state_type', MemberReq.state_type);
            body.append('district_type', MemberReq.district_type);
            body.append('city', MemberReq.city);
            body.append('agency_type', MemberReq.agency_type);
            body.append('role_type', MemberReq.role_type);
            body.append('status', MemberReq.status);
            body.append('reporting_id', MemberReq.agent_type);
            body.append('second_reporting_id', MemberReq.agent_type1);
          
            this.http.post(this.apiUrl_user_auths + 'admin_agent_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getRoleType() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'role_type_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAgencyType(agency_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'purticular_agency?agency_id=' + agency_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAdminAllEventContactList(selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'admin_all_event_contact_list?from_date=' + selectedDate + '&to_date=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

      } 
    getAgency() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'purticular_agency_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAllAgentDetails() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_agent_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getAllAgent() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_agent_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getadminalleventdetails(agent_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_agent_event_detail_list?agent_id=' + agent_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    saveAllEventData(EventReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
        
           // body.append('county_type', EventReq.county_type);
           // body.append('state_type', EventReq.state_type);
           // body.append('district_type', EventReq.district_type);
            body.append('select_type', EventReq.select_type);
            body.append('event_type', EventReq.event_type);
            body.append('code', EventReq.code);
            body.append('name', EventReq.name);
            body.append('discription', EventReq.discription);
            body.append('selectedDate', EventReq.current_date);
            body.append('place', EventReq.place);
            body.append('town', EventReq.town);
            body.append('village', EventReq.village);
            body.append('city_id', EventReq.city_type);
            body.append('member_type', EventReq.member_type); 
            body.append('agency_id', EventReq.agency_id);
            
          

            this.http.post(this.apiUrl_user_auths + 'admin_all_event_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    getallmemberdetails(agency_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_wise_member_list?agency_id=' + agency_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    cancelAgentRequest(agent_req_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'cancel_agent_request?agent_req_id=' + agent_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelEventRequest(event_req_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'cancel_event_request?event_req_id=' + event_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelAgencyRequest(agency_req_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'cancel_agency_request?agency_req_id=' + agency_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    ConfirmEventRequest(event_req_id){
    return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'confirm_event_request?event_req_id=' + event_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
    saveTextData(taxt_data) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('event_detail_id', taxt_data.id);
            body.append('secondary_value', taxt_data.text);

            this.http.post(this.apiUrl_user_auths + 'event_complete', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getCityType(){
    return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'city_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
    saveDistributorData(DistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
        
          
            body.append('name', DistributorReq.name);
            body.append('area', DistributorReq.area);
            body.append('distributor_type', DistributorReq.distributortype);
            body.append('description', DistributorReq.description);
            body.append('address', DistributorReq.address);
            body.append('agency_id', DistributorReq.agency_type);
            body.append('status', DistributorReq.status);

            this.http.post(this.apiUrl_user_auths + 'create_distributor', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getdistributorlist() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_distributor_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    getsubdistributorlist() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_sub_distributor_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
  
    saveSubDistributorData(DistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
        
            body.append('distributor_id', DistributorReq.distributor_type);
            body.append('root_id', DistributorReq.street_root);
            body.append('name', DistributorReq.name);
            body.append('area', DistributorReq.area);
            body.append('description', DistributorReq.description);
            body.append('address', DistributorReq.address);
            body.append('mobile_no', DistributorReq.mobile_no);
            body.append('status', DistributorReq.status);
            body.append('current_user', DistributorReq.agent_id);
         
            this.http.post(this.apiUrl_user_auths + 'create_sub_distributor', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelDistributorRequest(distributor_req_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_distributor?distributor_id=' + distributor_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelSubDistributorRequest(distributor_req_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_sub_distributor?sub_distributor_id=' + distributor_req_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDataCollections(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_data_collections?user_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getagentwisedistributorlist(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agent_wise_distributor_list?agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    saveAgentWiseDistributorData(DistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
            body.append('distributor_id', DistributorReq.distributor_id);
            body.append('root_id', DistributorReq.street_root);
            body.append('name', DistributorReq.name);
            body.append('mob_number', DistributorReq.mob_number);
            body.append('area', DistributorReq.area);
            body.append('description', DistributorReq.description);
            body.append('address', DistributorReq.address);
            body.append('status', DistributorReq.status);
            body.append('current_user', DistributorReq.agent_id);
         
            this.http.post(this.apiUrl_user_auths + 'add_sub_distributor', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDistributorType(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'area_wise_distributor?agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getSubDistributorType(street_root) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'collect_sub_distributor?root_id=' + street_root)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getRootType(distributor_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'collect_street_root?distributor_id=' + distributor_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveDisributorRequest(AgentdistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
    
            body.append('name', AgentdistributorReq.name);
            body.append('area', AgentdistributorReq.area);
            body.append('description', AgentdistributorReq.description);
            body.append('address', AgentdistributorReq.address);
            body.append('distributor_id', AgentdistributorReq.distributor_type);
            body.append('sub_distributor_id', AgentdistributorReq.sub_distributor_type);
            body.append('product_id', AgentdistributorReq.product_type);
            body.append('root_id', AgentdistributorReq.street_root);
            body.append('primary_sell', AgentdistributorReq.primary_sell);
            body.append('secondary_sell', AgentdistributorReq.seconary_sell);
            body.append('date', AgentdistributorReq.current_date);
            body.append('agent_id', AgentdistributorReq.agent_id);
            body.append('scheme_id', AgentdistributorReq.scheme_type);
            body.append('status', AgentdistributorReq.status);
         
            this.http.post(this.apiUrl_user_auths + 'create_daily_sales_report', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    endSale(AgentdistributorReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
            
            body.append('distributor_id', AgentdistributorReq.distributor_type);
            body.append('sub_distributor_id', AgentdistributorReq.sub_distributor_type);
            body.append('street_root', AgentdistributorReq.street_root);
            body.append('date', AgentdistributorReq.current_date);
            body.append('agent_id', AgentdistributorReq.agent_id);
           
            this.http.post(this.apiUrl_user_auths + 'end_sale', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
      saveProdouctDisributorRequest(AgentdistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
    
            body.append('distributor_id', AgentdistributorReq.distributor_type);
            body.append('sub_distributor_id', AgentdistributorReq.sub_distributor_type);
            body.append('root_id', AgentdistributorReq.street_root);
            body.append('date', AgentdistributorReq.current_date);
            body.append('agent_id', AgentdistributorReq.agent_id);
            body.append('status', AgentdistributorReq.status);
         
            this.http.post(this.apiUrl_user_auths + 'add_multiple_product', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDailySalesList(agent_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'date_wise_daily_sales_report?agent_id=' + agent_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDailySalesListDateWise(dailydate, agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'daily_sales_report_list?date=' + dailydate + '&agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getagentsubdistributordata(distributor_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'sub_distributor_list?distributor_id=' + distributor_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    cancelDailySaleRequest(daily_sale_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'distributor_daily_sale?daily_sale_id=' + daily_sale_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getzonelist() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'zone_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    saveZoneRequest(ZoneReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', ZoneReq.code);
            body.append('company_id', ZoneReq.company_type);
            body.append('name', ZoneReq.name); 
            body.append('email', ZoneReq.email);
            body.append('contact_no', ZoneReq.contact_no);
            body.append('address', ZoneReq.address);
            body.append('web_site', ZoneReq.website);
            body.append('country_id', ZoneReq.county_type);
            body.append('state_id', ZoneReq.state_type);
            body.append('district_id', ZoneReq.district_type);
            body.append('zone', ZoneReq.zone);
            body.append('status', ZoneReq.status);
    
          

            this.http.post(this.apiUrl_user_auths + 'create_zone', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    cancelZoneRequest(zone_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_zone?zone_id=' + zone_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getproductlist() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'product_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
     getSchemeType(product_type) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'collect_product_scheme?product_id=' + product_type)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    cancelProductRequest(product_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_product?product_id=' + product_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveProductRequest(productData) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            
            body.append('code', productData.code);
            body.append('name', productData.name); 
            body.append('description', productData.description);
            body.append('price', productData.price);
            body.append('status', productData.status);
    
            this.http.post(this.apiUrl_user_auths + 'create_product', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    locationData(attendancedata) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();

            body.append('agent_id', attendancedata.agent_id);
            body.append('date', attendancedata.date);
            body.append('in_time', attendancedata.in_time);
            body.append('place', attendancedata.place);
            body.append('latitude', attendancedata.lat);
            body.append('longitude', attendancedata.lng);
           
            this.http.post(this.apiUrl_user_auths + "location_data", body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveZoneSRData(ZoneSRReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
         
            body.append('code', ZoneSRReq.code);
            body.append('first_name', ZoneSRReq.first_name);
            body.append('middle_name', ZoneSRReq.middle_name);
            body.append('last_name', ZoneSRReq.last_name);
            body.append('gender', ZoneSRReq.gender); 
            body.append('email', ZoneSRReq.email);
            body.append('official_no', ZoneSRReq.official_no);
            body.append('personal_no', ZoneSRReq.personal_no);
            body.append('emergency_no', ZoneSRReq.emergency_no);
            body.append('blood_type', ZoneSRReq.blood_type);
            body.append('selectedDate', ZoneSRReq.selectedDate);
            body.append('address', ZoneSRReq.address);
            body.append('pin_code', ZoneSRReq.pin_code);
            body.append('county_type', ZoneSRReq.county_type);
            body.append('state_type', ZoneSRReq.state_type);
            body.append('district_type', ZoneSRReq.district_type);
            body.append('city', ZoneSRReq.city);
            body.append('agency_type', ZoneSRReq.agency_type);
            body.append('status', ZoneSRReq.status);

            this.http.post(this.apiUrl_user_auths + 'zone_sr_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAttendaceData(agent_id, selectedDate) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agent_daily_attendance?agent_id=' + agent_id + '&date=' + selectedDate)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAllAdminAttendanceList(agent_id, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'date_wise_agent_list?agent_id=' + agent_id + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAgencyWiseAttendanceList(reporting_id, agent_id, member_type, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_wise_agent_attend?reporting_id=' + reporting_id + '&current_user=' + agent_id + '&member_id=' + member_type + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAgencyDailySalesList(reporting_id, member_type, selectedDate, selectedDate1) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_wise_daily_sales_report?reporting_id=' + reporting_id + '&agent_id=' + member_type + '&fromdate=' + selectedDate + '&todate=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveAgencyDailySalesRequest(AgentdistributorReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();

            body.append('sale_type_id', AgentdistributorReq.select_sale_type);
            body.append('distributor_id', AgentdistributorReq.distributor_type);
            body.append('sub_distributor_id', AgentdistributorReq.sub_distributor_type);
            body.append('root_id', AgentdistributorReq.street_root);
            body.append('product_id', AgentdistributorReq.product_type);
            body.append('primary_sell', AgentdistributorReq.primary_sell);
            body.append('secondary_sell', AgentdistributorReq.seconary_sell);
            body.append('date', AgentdistributorReq.current_date);
            body.append('agent_id', AgentdistributorReq.agent_id);
            body.append('status', AgentdistributorReq.status);
            body.append('description', AgentdistributorReq.description);
            body.append('scheme_id', AgentdistributorReq.scheme_type);
         
            this.http.post(this.apiUrl_user_auths + 'create_Agency_wise_daily_sales_report', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getAgencyDailySalesDateWiseList(reporting_id, agent_id, dailydate) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'so_daily_date_wise_list?reporting_id=' + reporting_id + '&agent_id=' + agent_id + '&date=' + dailydate)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getRootlist() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'root_list')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    cancelRootRequest(root_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_root?root_id=' + root_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveRootRequest(RootReq){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
    
            body.append('street_root', RootReq.street_root);
            body.append('address', RootReq.address);
            body.append('distributor_id', RootReq.distributor_type);
            body.append('status', RootReq.status);
         
            this.http.post(this.apiUrl_user_auths + 'create_street_root', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getDistributorWiseRoot(distributor_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'distributor_wise_root?distributor_id=' + distributor_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    getRootWiseSubDistributor(distributor_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'root_wise_sub_distributor?distributor_id=' + distributor_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    getSOWiseDistributor(agency_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'so_wise_distributor?agency_id=' + agency_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    saveZoneEventData(EventReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();
        
           // body.append('county_type', EventReq.county_type);
           // body.append('state_type', EventReq.state_type);
           // body.append('district_type', EventReq.district_type);
           // body.append('select_type', EventReq.select_type);
           
            body.append('event_type', EventReq.event_type);
           // body.append('code', EventReq.code);
           // body.append('data_collections', EventReq.data_collections);
            body.append('name', EventReq.name);
            body.append('discription', EventReq.discription);
            body.append('selectedDate', EventReq.current_date);
            body.append('place', EventReq.place);
            body.append('town', EventReq.town);
            //body.append('village', EventReq.village);
            body.append('city_id', EventReq.city_type);
            body.append('member_id', EventReq.member_type);
            body.append('agency_id', EventReq.agency_type);
            
          

            this.http.post(this.apiUrl_user_auths + 'zone_event_request', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     saveZoneDailySalesRequest(AgentZoneReq) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();

            body.append('sale_type_id', AgentZoneReq.select_sale_type);
            body.append('distributor_id', AgentZoneReq.distributor_type);
            body.append('root_id', AgentZoneReq.street_root);
            body.append('sub_distributor_id', AgentZoneReq.sub_distributor_type);
            body.append('root_id', AgentZoneReq.street_root);
            body.append('product_id', AgentZoneReq.product_type);
            body.append('primary_sell', AgentZoneReq.primary_sell);
            body.append('secondary_sell', AgentZoneReq.seconary_sell);
            body.append('date', AgentZoneReq.current_date);
            body.append('agent_id', AgentZoneReq.agent_id);
            body.append('status', AgentZoneReq.status);
            body.append('description', AgentZoneReq.description);
            body.append('scheme_id', AgentZoneReq.scheme_type);
         
            this.http.post(this.apiUrl_user_auths + 'create_zone_wise_daily_sales_report', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    SaveSchemeData(SchemeData){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            let body = new FormData();

            body.append('product_id', SchemeData.product_type);
            body.append('from_date', SchemeData.from_date);
            body.append('to_date', SchemeData.to_date);
            body.append('name', SchemeData.name);
            body.append('scheme_type', SchemeData.scheme_type);
            body.append('discount', SchemeData.discount);
            body.append('status', SchemeData.status);

            this.http.post(this.apiUrl_user_auths + 'create_scheme', body, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }
     getAllScheme() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'all_scheme')
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
    cancelSchemeRequest(scheme_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'destroy_scheme?scheme_id=' + scheme_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getProductWiseList(agent_id, sub_distributor, date) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'product_wise_list?agent_id=' + agent_id + '&sub_distributor=' + sub_distributor + '&date=' + date)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    } 
      getDateWiseSale(agent_id,dailydate) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'date_wise_sale?agent_id=' + agent_id + '&current_date=' + dailydate)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getReportingWiseDateWiseSale(agent_id, reporting_id, dailydate) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'so_asm_sale_report?agent_id=' + agent_id + '&reporting_id=' + reporting_id + '&date=' + dailydate)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getProductTotalPrice(agent_id, sub_distributor, current_date) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'product_total_price?agent_id=' + agent_id + '&sub_distributor=' + sub_distributor + '&date=' + current_date)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    EmployeeAttendace(agent_id, selectedDate, selectedDate1){
    return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'employee_wise_date?agent_id=' + agent_id + '&start_date=' + selectedDate + '&end_date=' + selectedDate1)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
     getAgentAttendaceData(agent_id, date) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agent_wise_attendance?agent_id=' + agent_id + '&date=' + date)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getmemberData(agent_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'reporing_wise_member?agent_id=' + agent_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
    getagencydetails(agency_id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl_user_auths + 'agency_wise_sr?agency_id=' + agency_id)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }
}
