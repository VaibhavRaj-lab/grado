import React from "react";

function table(props) {
  return (
    <div style={{ width: "80%" }}>
      <table id="example" class="table table-striped nowrap">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
            <th>Extn.</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gavin</td>
            <td>Cortez</td>
            <td>Team Leader</td>
            <td>San Francisco</td>
            <td>22</td>
            <td>2008/10/26</td>
            <td>$235,500</td>
            <td>2860</td>
            <td>g.cortez@datatables.net</td>
          </tr>
          <tr>
            <td>Martena</td>
            <td>Mccray</td>
            <td>Post-Sales support</td>
            <td>Edinburgh</td>
            <td>46</td>
            <td>2011/03/09</td>
            <td>$324,050</td>
            <td>8240</td>
            <td>m.mccray@datatables.net</td>
          </tr>
          <tr>
            <td>Unity</td>
            <td>Butler</td>
            <td>Marketing Designer</td>
            <td>San Francisco</td>
            <td>47</td>
            <td>2009/12/09</td>
            <td>$85,675</td>
            <td>5384</td>
            <td>u.butler@datatables.net</td>
          </tr>
          <tr>
            <td>Howard</td>
            <td>Hatfield</td>
            <td>Office Manager</td>
            <td>San Francisco</td>
            <td>51</td>
            <td>2008/12/16</td>
            <td>$164,500</td>
            <td>7031</td>
            <td>h.hatfield@datatables.net</td>
          </tr>
          <tr>
            <td>Hope</td>
            <td>Fuentes</td>
            <td>Secretary</td>
            <td>San Francisco</td>
            <td>41</td>
            <td>2010/02/12</td>
            <td>$109,850</td>
            <td>6318</td>
            <td>h.fuentes@datatables.net</td>
          </tr>
          <tr>
            <td>Vivian</td>
            <td>Harrell</td>
            <td>Financial Controller</td>
            <td>San Francisco</td>
            <td>62</td>
            <td>2009/02/14</td>
            <td>$452,500</td>
            <td>9422</td>
            <td>v.harrell@datatables.net</td>
          </tr>
          <tr>
            <td>Timothy</td>
            <td>Mooney</td>
            <td>Office Manager</td>
            <td>London</td>
            <td>37</td>
            <td>2008/12/11</td>
            <td>$136,200</td>
            <td>7580</td>
            <td>t.mooney@datatables.net</td>
          </tr>
          <tr>
            <td>Jackson</td>
            <td>Bradshaw</td>
            <td>Director</td>
            <td>New York</td>
            <td>65</td>
            <td>2008/09/26</td>
            <td>$645,750</td>
            <td>1042</td>
            <td>j.bradshaw@datatables.net</td>
          </tr>
          <tr>
            <td>Olivia</td>
            <td>Liang</td>
            <td>Support Engineer</td>
            <td>Singapore</td>
            <td>64</td>
            <td>2011/02/03</td>
            <td>$234,500</td>
            <td>2120</td>
            <td>o.liang@datatables.net</td>
          </tr>
          <tr>
            <td>Bruno</td>
            <td>Nash</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>38</td>
            <td>2011/05/03</td>
            <td>$163,500</td>
            <td>6222</td>
            <td>b.nash@datatables.net</td>
          </tr>
          <tr>
            <td>Sakura</td>
            <td>Yamamoto</td>
            <td>Support Engineer</td>
            <td>Tokyo</td>
            <td>37</td>
            <td>2009/08/19</td>
            <td>$139,575</td>
            <td>9383</td>
            <td>s.yamamoto@datatables.net</td>
          </tr>
          <tr>
            <td>Thor</td>
            <td>Walton</td>
            <td>Developer</td>
            <td>New York</td>
            <td>61</td>
            <td>2013/08/11</td>
            <td>$98,540</td>
            <td>8327</td>
            <td>t.walton@datatables.net</td>
          </tr>
          <tr>
            <td>Finn</td>
            <td>Camacho</td>
            <td>Support Engineer</td>
            <td>San Francisco</td>
            <td>47</td>
            <td>2009/07/07</td>
            <td>$87,500</td>
            <td>2927</td>
            <td>f.camacho@datatables.net</td>
          </tr>
          <tr>
            <td>Serge</td>
            <td>Baldwin</td>
            <td>Data Coordinator</td>
            <td>Singapore</td>
            <td>64</td>
            <td>2012/04/09</td>
            <td>$138,575</td>
            <td>8352</td>
            <td>s.baldwin@datatables.net</td>
          </tr>
          <tr>
            <td>Zenaida</td>
            <td>Frank</td>
            <td>Software Engineer</td>
            <td>New York</td>
            <td>63</td>
            <td>2010/01/04</td>
            <td>$125,250</td>
            <td>7439</td>
            <td>z.frank@datatables.net</td>
          </tr>
          <tr>
            <td>Zorita</td>
            <td>Serrano</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>56</td>
            <td>2012/06/01</td>
            <td>$115,000</td>
            <td>4389</td>
            <td>z.serrano@datatables.net</td>
          </tr>
          <tr>
            <td>Jennifer</td>
            <td>Acosta</td>
            <td>Junior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>43</td>
            <td>2013/02/01</td>
            <td>$75,650</td>
            <td>3431</td>
            <td>j.acosta@datatables.net</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default table;
