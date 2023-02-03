function printinfo(obj) {
  var thing = String(obj);
  console.log(`----------------------------------------------`);
  console.log(`Received: ` + thing);
  console.log(`Object type: ` + typeof obj);
  console.log(`Object name: ` + obj.name);
  console.log(`Object value: ` + obj.value);
  console.log(`Object valueAsNumber: ` + obj.valueAsNumber);
  console.log(`Object checked: ` + obj.checked);
  var str = JSON.stringify(obj, null, 4);
  console.log(`Object: ` + str);
  console.log(`Length: ` + obj.length);
  console.log(`Array: `);
  Object.keys(obj).forEach((prop) => console.log(prop));
  console.log(`indeterminate: ` + obj.indeterminate);
  console.log(`----------------------------------------------`);
}

function validateForm() {
  console.log('Beginning client-side form validation.');

  const form = document.forms["request"];

  // Validate name
  try {
    console.log(`Received name: ` + form["name"].value);
  } catch {
    document.getElementById('val_name').style.display = "block";
    document.getElementById('val_name').scrollIntoView();
    return false;
  }

  // Validate email address and phone number
  if (!form["email"].value && !form["phone"].value) {
    document.getElementById('val_email_phone').style.display = "block";
    document.getElementById('val_email_phone').scrollIntoView();
    return false;
  } else {
    console.log(`Received email: ` + form["email"].value);
    console.log(`Received phone: ` + form["phone"].value);
  }

  // Validate event name
  console.log(`Checking event name`);
  try {
    console.log(`Received event name: ` + form["description"].value);
  } catch {
    document.getElementById('val_description').style.display = "block";
    document.getElementById('val_description').scrollIntoView();
    return false;
  }

  // Validate event type
  if (form["eventtype"].value.length > 0) {
    console.log(`Received event type: ` + form["eventtype"].value);
  } else {
    document.getElementById('val_eventtype').style.display = "block";
    document.getElementById('val_eventtype').scrollIntoView();
    return false;
  }
  var valEventtype = form["eventtype"].value;

  // Validate school name
  if ((valEventtype == "K-12 Education" || valEventtype == "Student Organization Event") && !form["schoolname"].value) {
    document.getElementById('val_schoolname').style.display = "block";
    document.getElementById('val_schoolname').scrollIntoView();
    return false;
  } else {
    console.log(`Received school name: ` + form["schoolname"].value);
  }

  // Validate event type other
  if (valEventtype == "Other" && !form["eventtype_other"].value) {
    document.getElementById('val_eventtype_other').style.display = "block";
    document.getElementById('val_eventtype_other').scrollIntoView();
    return false;
  } else {
    console.log(`Received event type other: ` + form["eventtype_other"].value);
  }

  // Validate public switch
  let valPublic;
  if (valEventtype == "Festival" || valEventtype == "Student Organization Event" || valEventtype == "Other") {
    try {
      console.log(`Received public: ` + form["public"].value);
      valPublic = form["public"].value;
    } catch {
      document.getElementById('val_public').style.display = "block";
      document.getElementById('val_public').scrollIntoView();
      return false;
    }
  }

  // Validate entry fee switch
  if (valPublic == "Yes" && form["entryfee"].value.length > 0) {
    try {
      console.log(`Received entry fee: ` + form["entryfee"].value);
    } catch {
      document.getElementById('val_entryfee').style.display = "block";
      document.getElementById('val_entryfee').scrollIntoView();
      return false;
    }
  } else if (valPublic == "Yes" && form["entryfee"].value.length == 0) {
    document.getElementById('val_entryfee').style.display = "block";
    document.getElementById('val_entryfee').scrollIntoView();
    return false;
  }

  // Location
  let valLocation = form["location"].value;
  console.log(`Received location: ` + valLocation);

  // Validate known date and time
  let valKnownstart;
  if (form["knownstart"].value.length > 0) {
    console.log(`Received knownstart: ` + form["knownstart"].value);
    valKnownstart = form["knownstart"].value;
  } else {
    document.getElementById('val_datetime_known').style.display = "block";
    document.getElementById('val_datetime_known').scrollIntoView();
    return false;
  }

  // Validate date and time
  if (valKnownstart == "Yes") {
    if (form["date"].value.length > 0 && form["time"].value.length > 0) {
      console.log(`Received date: ` + form["date"].value + ` and time: ` + form["time"].value);
    } else {
      document.getElementById('val_datetime_specific').style.display = "block";
      document.getElementById('val_datetime_specific').scrollIntoView();
      return false;
    }
  } else if (valKnownstart == "No") {
    if (form["timing"].value.length > 0) {
      console.log(`Received time info: ` + form["timing"].value);
    } else {
      document.getElementById('val_datetime_nonspecific').style.display = "block";
      document.getElementById('val_datetime_nonspecific').scrollIntoView();
      return false;
    }
  } else {
    document.getElementById('val_datetime_known').style.display = "block;"
    document.getElementById('val_datetime_known').scrollIntoView();
  }

  let valParkingspots = form["parkingspots"].value;
  console.log(`Received parking spots : ` + valParkingspots);

  let valStagingarea = form["stagingarea"].value;
  console.log(`Received staging area: ` + valStagingarea);

  let valOtherinfo = form["otherinfo"].value;
  console.log(`Received other info: ` + valOtherinfo);

  try {
    let valReferral = form["referral"].value;
    console.log(`Received referrals: ` + valReferral);
  } catch {
    // Don't worry about it.
  }

  let valReferral_other = form["referral_other"].value;
  console.log(`Received referral other: ` + valReferral_other);

  // Validate reading of FAQ
  if (form["readfaq"].checked) {
    console.log(`Received readfaq: ` + form["readfaq"].checked);
  } else {
    document.getElementById('val_readfaq').style.display = "block";
    document.getElementById('val_readfaq').scrollIntoView();
    return false;
  }

  return true;
}